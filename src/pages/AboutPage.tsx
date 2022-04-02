import { Link } from "react-router-dom"
export const AboutPage = () => {
    return (
        <div className="py-24">
            <div className="content flex w-3/4 mx-auto gap-8">
                <div className="img">
                    <img src="https://uicookies.com/demo/theme/trainer/img/about_me.jpg" width='100%' alt="" />
                </div>
                <div className="infomation">
                    <h2 className="text-5xl font-[700] py-3 mb-8 border-b-4 border-cyan-500 ">About Me</h2>
                    <span className='pb-8 block text-xl text-[#888] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eaque quasi, ipsa temporibus voluptatibus maxime rem fugiat, voluptate iste exercitationem alias architecto dolores dolor animi perferendis facere suscipit deserunt odit!</span>
                    <span className='pb-8 block text-xl text-[#888] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum eaque quasi, ipsa temporibus voluptatibus maxime rem fugiat, voluptate iste exercitationem alias architecto dolores dolor animi perferendis facere suscipit deserunt odit!</span>
                    <button className="bg-cyan-500 p-3 rounded-xl text-xl font-[500] text-white hover:bg-cyan-700">Read more about me</button>
                </div>
            </div>
            <div className="after-content grid grid-cols-3 w-5/6 mx-auto mt-24 gap-8">
                <div className="col">
                    <h2 className=" font-[600] text-2xl py-3">Title</h2>
                    <span className="text-[#888] text-lg">“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.”</span>
                </div>
                <div className="col">
                    <h2 className=" font-[600] text-2xl py-3">Title</h2>
                    <ul>
                        <li className="py-2">
                            <Link to='#' className='flex gap-4'>
                                <img src="https://uicookies.com/demo/theme/trainer/img/about_me.jpg" alt="" width='60' />
                                <span className="text-[#888] text-lg">Bookmarksgrove right at the coast of the Semantics</span>
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to='#' className='flex gap-4'>
                                <img src="https://uicookies.com/demo/theme/trainer/img/about_me.jpg" alt="" width='60' />
                                <span className="text-[#888] text-lg">Bookmarksgrove right at the coast of the Semantics</span>
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to='#' className='flex gap-4'>
                                <img src="https://uicookies.com/demo/theme/trainer/img/about_me.jpg" alt="" width='60' />
                                <span className="text-[#888] text-lg">Bookmarksgrove right at the coast of the Semantics</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <h2 className=" font-[600] text-2xl py-3">My Vision</h2>
                    <span className="text-[#888] text-lg">“The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.”</span>
                </div>
            </div>
        </div>
    )
}
