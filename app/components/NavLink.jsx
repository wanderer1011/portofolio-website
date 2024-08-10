import Link from "next/link";

const NavLink = ({href , title}) => {
    return(
        <Link href={href} className='block pl-3 pr-4 sm:text-xl rounded-lg md:p-0 hover:bg-[#f4f4f4]'>
                    <div className='p-2 px-4'>
                            {title}
                    </div>
        </Link>
    );
}

export default NavLink;