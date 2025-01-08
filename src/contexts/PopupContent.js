import React from "react";
import LandingPopup from "../components/Body/LandingPopup";
import AdvertiserPopup from "../components/Body/AdvertiserPopup";
// 다른 팝업 컴포넌트도 추가 가능

const PopupContent = ({ type, onClose, setData }) => {
    switch (type) {
        case "landing":
            return <LandingPopup title="랜딩 등록" onClose={onClose} setData={setData} />;
        case "advertiser":
            return <AdvertiserPopup title="광고주 등록" onClose={onClose} setData={setData} />;
        default:
            return (
                <div className="p-4 bg-white rounded-lg shadow dark:bg-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        알 수 없는 팝업
                    </h3>
                    <button
                        onClick={onClose}
                        className="mt-4 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                    >
                        닫기
                    </button>
                </div>
            );
    }
};

export default PopupContent;
