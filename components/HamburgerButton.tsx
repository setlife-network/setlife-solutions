const HamburgerButton = (props: any) => {

    const {
        open,
        setOpen
    } = props

    return (
        <div 
            className="z-50 flex relative w-7 h-4 flex-col justify-between items-center md:hidden" 
            onClick={() => {
                setOpen(!open)
            }}
        >
            <span className={`h-0.5 w-full bg-solid-white rounded-lg transform transition duration-300 ease-in-out`} />
            <span className={`h-0.5 w-full bg-solid-white rounded-lg transition-all duration-300 ease-in-out`} />
            <span className={`h-0.5 w-full bg-solid-white rounded-lg transform transition duration-300 ease-in-out`} />
        </div>
    )
}

export default HamburgerButton