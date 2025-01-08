import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "../../contexts/hooks/useForm";
import { useState } from "react";

const AdvertiserPopup = ({ title, onClose, setData }) => {
    const { user } = useAuth();
    const { mainUrl } = useForm();
    const { id } = useParams();
    const [event1, setEvent1] = useState(false); // useState 수정
    const [event2, setEvent2] = useState(false); // useState 수정

    const { formState, handleChange, handleSubmit } = useForm(
        {
            "title": "",
            "advertiser_name": "", // 광고주명
            "contact_person": "", // 담당자명
            "phone_number": "", // 전화번호
            "email": "", // 이메일
            "agency_name": "", // 광고대행사명
            "start_date": null,
            "ad_cost": null,
            "html_content": "",
            "user": id,
        },
        async (data) => {
            const today = new Date();

            const year = today.getFullYear();
            const month = (today.getMonth() + 1).toString().padStart(2, '0');
            const day = today.getDate().toString().padStart(2, '0');
            const yyyymmdd = `${year}-${month}-${day}`;

            data.start_date = yyyymmdd;

            try {
                // API 호출 로직 작성
                console.log("Form data:", data);
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
                        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">매체명</label>
                                    <input type="text" name="title" id="title" value={formState.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="제목을 입력해주세요." required />
                                </div>
                                <div className="col-span-2">
                                    <ul className="space-y-2">
                                        <li className="border rounded-lg overflow-hidden">
                                            <button type="button" className="w-full flex items-center justify-between p-4 focus:outline-none" onClick={() => setEvent1(!event1)}>
                                                <span className="font-medium dark:text-white">광고주</span>
                                                <svg className={`w-5 h-5 transition-transform ${event1 ? 'rotate-180' : ''} dark:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div className={`${!event1 ? 'hidden' : ''} p-4 bg-gray-50 border-t dark:bg-gray-700`}>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">광고주명</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">담당자</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="border rounded-lg overflow-hidden">
                                            <button type="button" className="w-full flex items-center justify-between p-4 focus:outline-none" onClick={() => setEvent2(!event2)}>
                                                <span className="font-medium dark:text-white">광고대행사</span>
                                                <svg className={`w-5 h-5 transition-transform ${event2 ? 'rotate-180' : ''} dark:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            <div className={`${!event2 ? 'hidden' : ''} p-4 bg-gray-50 border-t dark:bg-gray-700`}>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">광고대행사명</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">담당자</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                                <div className="col-span-2 mb-2">
                                                    <label htmlFor="advertiser_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                                                    <input type="text" name="advertiser_name" id="advertiser_name" value={formState.advertiser_name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* 광고대행사 섹션 */}
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <span className="material-icons mr-1">add</span>
                                등록하기
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiserPopup;
