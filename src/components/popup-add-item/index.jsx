/**
 * @type {React.FC<{message: string, onConfirm: ()=>void, onCancel?: (()=>void )}>}
 */
export const PopupAddItem = ({message, onConfirm, onCancel}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20'>
      <div className='bg-white p-6 rounded-lg shadow-lg text-center max-w-xs w-full'>
        <p className='mb-4 text-lg font-semibold'>{message}</p>
        <div className='flex justify-around'>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800'>
            確認
          </button>
          {/* {typeof onCancel === 'boolean' || ( */}
          {onCancel && (
            <button
              onClick={onCancel}
              className='px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400'>
              取消
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
// onCancel
// - callback : 傳 callback
// - false : 傳 false
//
