import { useEffect, useState } from "react";
import { useForm } from "../../contexts/hooks/useForm";

const LandingDetails = ({ url }) => {
    const [id, setId] = useState();
    const [html, setHtml] = useState();
    const { mainUrl } = useForm();
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
        window.addEventListener('beforeunload', (event)=> {
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
            document.querySelector('.openCt').click();
            
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
        }
    }, [html]);

    return (
        <div>
            <a href="http://pf.kakao.com/_xoAmjn/chat" target="_blank" className="hidden openCt"></a>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {!isOnline && <div className="alert">네트워크가 끊어졌습니다. 연결을 확인하세요.</div>}
        </div>
    );
};

export default LandingDetails;
