
export default function SignIn() {
    return (
        <div className="flex bg-[#e8e9ea] justify-center w-full items-center h-[48rem]">

            <div className="z-10  bg-back-pattern items-center bg-cover w-[25rem] h-[40rem] rounded-l-xl"></div>
            <div className="z-10  flex flex-col justify-center bg-gradient-to-b from-white-60 to-white-80 border-2 border-white items-center w-[25rem] h-[40rem] rounded-r-xl">
                <div className="flex w-[90%]">
                    <p className="text-3xl font-medium text-[#8c8c8c] font-inter">Sign In</p>
                </div>
                <div className="flex w-[90%] mb-2">
                    <p className="text-xs text-[#8c8c8c]">Don't have an account? <a className="underline" href="">Sign Up</a></p>
                </div>
                <div className="flex flex-col items-center w-[90%]">
                    <div className="my-2 w-full">
                        <input className="p-3 text-sm w-full rounded-md text-[#a7a7a7] font-normal" placeholder="Email" type="text" />
                    </div>
                    <div className="mt-2 flex justify-center items-center w-full bg-white rounded-md">
                        <input className="p-3 text-sm rounded-l-md w-full text-[#a7a7a7] font-normal" placeholder="Enter your password" type="text" />
                        <div className="bg-back-eye w-6 h-5 bg-cover mr-2"></div>

                    </div>
                </div>
                <div className="my-2 flex justify-end w-[90%]">
                    <p><a className="underline text-xs text-[#a7a7a7]" href="">Forget password?</a></p>
                </div>
                <button className="w-[90%] p-2 text-white rounded-lg font-bold bg-[#fb6841]">Log In</button>
            </div>
            <div className="rounded-full z-0 left-[55rem] bottom-[24rem] w-72 h-72 blur-xl bg-[#dc4139] absolute z-index"></div>
            <div className="rounded-full z-0 left-[40rem] bottom-[5rem] w-96 h-96 blur-xl bg-[#ffe941] absolute z-index"></div>


        </div>
    )
}