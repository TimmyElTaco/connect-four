export default ( { children, updateBoard, index1, index2 } ) => {
    
    function handleClick() {
        updateBoard(index1, index2);
    }

    return (
        <div className='
            rounded-2xl 
            text-4xl 
            bg-slate-500 
            w-full 
            h-full 
            select-none 
            flex 
            justify-center
            items-center
            cursor-pointer
            hover:bg-slate-700
            duration-200
            ease
        '
            onClick={handleClick}
        >
            <span>
                {children}
            </span>
        </div>
    )
}