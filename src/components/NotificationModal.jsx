import React from 'react';
import { X, BellRing } from 'lucide-react';

const NotificationModal = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  const newCount = notifications.filter(n => n.isNew).length;

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* 알림 모달 */}
      <div className="fixed top-20 right-6 w-96 max-h-[600px] bg-white rounded-3xl shadow-2xl z-50 animate-in slide-in-from-top-2 duration-300 border border-gray-100">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 rounded-t-3xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BellRing size={20} className="text-[#3C1E1E]" />
            <h3 className="font-black text-lg text-[#3C1E1E]">알림</h3>
            {newCount > 0 && (
              <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                {newCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* 알림 리스트 */}
        <div className="overflow-y-auto max-h-[500px] p-4">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-gray-400">
              <BellRing size={48} className="mb-3 opacity-30" />
              <p className="text-sm font-medium">새로운 알림이 없어요</p>
            </div>
          ) : (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-2xl border transition-all hover:shadow-md cursor-pointer ${
                    notification.isNew
                      ? 'border-[#FEE500] bg-yellow-50/50'
                      : 'border-gray-100 bg-white'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* 아이콘 */}
                    <div className={`flex-shrink-0 w-10 h-10 ${notification.bgColor} rounded-xl flex items-center justify-center text-xl`}>
                      {notification.icon}
                    </div>

                    {/* 내용 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-bold text-sm text-gray-800 leading-tight">
                          {notification.title}
                        </h4>
                        {notification.isNew && (
                          <span className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-1"></span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed mb-2">
                        {notification.message}
                      </p>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {notification.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        {notifications.length > 0 && (
          <div className="sticky bottom-0 bg-white px-6 py-4 border-t border-gray-100 rounded-b-3xl">
            <button className="w-full py-2.5 text-xs font-bold text-gray-500 hover:text-gray-700 transition-colors">
              모두 읽음으로 표시
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationModal;
