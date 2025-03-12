import { useEffect, useRef, useState } from "react";
import { useForm } from "../../contexts/hooks/useForm";

const LandingDetails = ({ url }) => {
    const [id, setId] = useState();
    const [html, setHtml] = useState();
    const { mainUrl } = useForm();

    const [listData, setListData] = useState();
    const [totalNumber, setTotalNumber] = useState(0);
    const [totalNumberDepartures, setTotalNumberDepartures] = useState(0);
    const [isOnline, setIsOnline] = useState(navigator.onLine); // 네트워크 상태 추적

    const fetchData = async () => {
        try {
            const response = await fetch(`${mainUrl}api/landing/landing-pages/url/${url}`);
            const result = await response.json();
            document.title = result[0].title;
            setHtml(result[0].html_content);
            setId(result[0].visits_data[0].id);
        } catch (error) {
            console.error("API 요청 중 오류 발생:", error);
        }
    };

    const postExitData = async (offsetY) => {
        try {
            if (!id) return; // ID가 없으면 실행하지 않음
            const response = await fetch(`${mainUrl}api/landing/visit-details/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    device_type: window.navigator.userAgent.includes("Mobile") ? "Mobile" : "PC",
                    ip_address: await getIPAddress(),
                    session_start: new Date().toISOString(), // 시작 시간은 현재 시간으로
                    session_end: new Date().toISOString(), // 종료 시간도 현재 시간으로
                    exit_y_coordinate: parseInt(offsetY), // 현재 스크롤 위치
                    visit: id,
                }),
            });
            if (!response.ok) {
                throw new Error("이탈 데이터 전송 실패");
            }
        } catch (error) {
            console.error("이탈 데이터 전송 중 오류 발생:", error);
        }
    };

    const getIPAddress = async () => {
        try {
            const res = await fetch("https://api.ipify.org?format=json");
            const data = await res.json();
            return data.ip;
        } catch (error) {
            console.error("IP 주소를 가져오는 중 오류 발생:", error);
            return "";
        }
    };

    const list = async () => {

        const user = localStorage.getItem("user") ? localStorage.getItem("user") : null;

        if (!user) return false;
        document.querySelector('.scroll_tog').classList.remove('hidden')
        document.querySelector("#table_scroll").classList.remove("hidden")

        const response = await fetch(`${mainUrl}/api/landing/visit-details/`);
        if (response.ok) {
            const results = await response.json();
            const container = document.querySelector('.scroll_data_body');
            container.innerHTML = ''; // Clear previous entries
            const mainHeight = 53710;
            // Initialize the array with zeros
            const scrollarray = new Array(Math.floor(mainHeight / 50)).fill(0);
            const scrollarray_300 = new Array(Math.floor(mainHeight / 1000)).fill(0);

            // Populate the array with scroll data
            results.forEach(element => {
                let chk = Math.floor(element.exit_y_coordinate / 50);
                if (chk < scrollarray.length) {
                    scrollarray[chk] = (scrollarray[chk] || 0) + 1;
                }
            });

            results.forEach(element => {
                let chk = Math.floor(element.exit_y_coordinate / 50);
                if (chk < scrollarray_300.length) {
                    scrollarray_300[chk] = (scrollarray_300[chk] || 0) + 1;
                }
            });
            setListData(scrollarray_300)


            const totalScrollVisits = scrollarray.reduce((acc, currentValue) => acc + currentValue, 0);
            setTotalNumber(results.length);
            setTotalNumberDepartures(results.length);
            // Generate HTML for each entry in the array


            scrollarray.forEach((count, index) => {
                if (count > 0) { // Only display if there's at least one occurrence
                    const html = `<div class="scroll_data overflow-auto" style="width: ${count / totalScrollVisits * 100}%;top:${index * 50}px">${(count / totalScrollVisits * 100).toFixed(2)}%</div>`;
                    container.innerHTML += html;
                }
            });


        } else {
            console.error("Failed to fetch data:", response.statusText);
        }
    }

    useEffect(() => {
        fetchData();
        // 페이지 가시성 변경 이벤트 핸들러
        const handleVisibilityChange = (offsetY) => {
            // 데이터 전송
            postExitData(offsetY);
            // 브라우저 경고 메시지 설정 (필수는 아님, 일부 브라우저에서 제한)
            // event.preventDefault();
        };

        handleVisibilityChange(0);
        window.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            handleVisibilityChange(window.scrollY + (window.innerHeight / 2));
        });

        return () => {
            // 메모리 누수 방지
            document.removeEventListener('beforeunload', handleVisibilityChange);
        };
    }, [id]);

    useEffect(() => {
        if (html) {
            const div = document.createElement("div");
            div.innerHTML = html;
            // 스크립트를 수동으로 실행
            const scripts = div.querySelectorAll("script");
            scripts.forEach((script) => {
                const newScript = document.createElement("script");
                newScript.type = script.type || "text/javascript";
                if (script.src) {
                    // 외부 스크립트
                    newScript.src = script.src;
                } else {
                    // 인라인 스크립트
                    newScript.textContent = script.innerHTML;
                }
                document.body.appendChild(newScript);
                // 실행 후 스크립트 제거
                document.body.removeChild(newScript);
            });
            list(); // Ensure list is called after setting height
        }
    }, [html]);

    return (
        <div>
            <div id="MainBody" dangerouslySetInnerHTML={{ __html: html }} />
            <div className="scroll_data_body">
                {/* <div className="scroll_data" style="width: 20%;">20%</div> */}
            </div>

            <div className="scroll_tog hidden">
                <ul>
                    <li>
                        총 방문수 : <span>{totalNumber}명</span>
                    </li>
                    <li>
                        총 이탈수 : <span>{totalNumberDepartures}명</span>
                    </li>
                </ul>
            </div>

            <div id="table_scroll" className=" fixed top-[85px] left-[10px] border h-52 overflow-auto hidden">
                <table className="w-52 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white" >구간</th>
                            <th className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white" >이탈수</th>
                            <th className="px-6 py-4 font-medium text-center text-gray-900 whitespace-nowrap dark:text-white" >이탈율</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800">
                        {
                            listData?.map((e, i) => (
                                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">{ i }</td>
                                    <td className="p-4 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">{ e }</td>
                                    <td className="p-4 text-sm text-center font-normal text-gray-900 whitespace-nowrap dark:text-white">{ (e / totalNumber * 100).toFixed(2) }%</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            {!isOnline && <div className="alert">네트워크가 끊어졌습니다. 연결을 확인하세요.</div>}
        </div>
    );
};

export default LandingDetails;
