const HamburgerButton = (props: any) => {

    const {
        open,
        setOpen
    } = props

    return (
        <div 
            className={`z-50 flex w-7 h-4 mt-2 flex-col justify-between items-center md:hidden ${open ? 'mt-3 fixed' : 'mt-1 relative'}`}
            onClick={() => {
                setOpen(!open)
            }}
        >
            <span className={`h-0.5 w-full bg-solid-white rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-0.5' : ''}`} />
            <span className={`h-0.5 w-full bg-solid-white rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`} />
            <span className={`h-0.5 w-full bg-solid-white rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3' : ''}`} />
        </div>
    )
}

export default HamburgerButton