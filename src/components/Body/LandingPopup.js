import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../contexts/hooks/useForm";

const LandingPopup = ({ title, onClose, setData }) => {
    const { user } = useAuth();
    const { mainUrl } = useForm();
    const { id } = useParams();

    const { formState, handleChange, handleSubmit } = useForm(
        {
            "title": "",
            "url": "",
            "ad_platform": "",
            "start_date": null,
            "ad_cost": null,
            "html_content": "",
            "user": id
        },

        async (data) => {
            const today = new Date();

            const year = today.getFullYear();
            // 월
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            const yyyymmdd = `${year}-${month}-${day}`;

            data.start_date = yyyymmdd;

            try {
                const response = await fetch(`${mainUrl}api/landing/landing-pages/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    const result = await response.json();
                    // 데이터를 업데이트
                    let data = [
                        result.id, result.title, result.url, result.ad_platform, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '무료', ''
                    ];
                    setData(prevState => ({
                        ...prevState,
                        data: [
                            ...prevState.data, data
                        ] // API 데이터에 맞게 매핑 필요
                    }));
                } else {
                    console.error("Login failed:", response.status);
                    // 오류 처리
                }
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }
    );
    return (
        <div id="default-modal" tabIndex="-1" className="flex bg-gray-700 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <form className="p-4 md:p-5" onSubmit={handleSubmit} >
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
                                    <input type="text" name="title" id="title" value={formState.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="제목을 입력해주세요." required="" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">주소</label>
                                    <input type="text" name="url" id="url" value={formState.url} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="랜딩 주소를 입력해주세요." required="" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="ad_platform" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">광고매체명</label>
                                    <input type="text" name="ad_platform" id="ad_platform" value={formState.ad_platform} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="광고매체명을 입력해 주세요." required="" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="html_content">Upload file</label>
                                    <input value={formState.html_content} onChange={handleChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="html_content" type="file" />
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">HTML (MAX. 5000bit).</p>
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span className="material-icons mr-1">add</span>
                                등록하기
                            </button>
                        </form>
                    </div>
                    {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                        <button onClick={onClose} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default LandingPopup;
