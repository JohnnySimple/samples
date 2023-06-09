import { CheckCircle } from "@mui/icons-material";

function Signup() {
    return (
        <main className="w-[70%] mt-20 m-auto shadow-sm">
            <div className="md:flex md:justify-between md:flex-row flex flex-col-reverse">
                <div className="md:w-[47%] p-3">
                    <div className="px-5">
                        <h1 className="text-4xl font-bold text-center pt-10">Stay Updated!</h1>
                        <p className="pt-10">Join 60,000+ product managers receiving monthly updates on:</p>
                        <div className="pt-3">
                            <p className="text-sm py-1">
                                <span className="pr-2">
                                    <CheckCircle fontSize="small" className="" />
                                </span>
                                Product discovery and building what matters
                            </p>
                            <p className="text-sm py-1">
                                <span className="pr-2">
                                    <CheckCircle fontSize="small" className="" />
                                </span>
                                Measuring to ensure updates are a success
                            </p>
                            <p className="text-sm py-1">
                                <span className="pr-2">
                                    <CheckCircle fontSize="small" className="" />
                                </span>
                                And much more!
                            </p>
                        </div>

                        <div className="pt-10">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 
                                    text-gray-700 focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="pt-4">
                                <button type="button" className="bg-blue-500 w-full py-2 rounded text-white font-bold
                                    focus:outline-none focus:shadow-outline">
                                    Subscribe to monthly newsletter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-[47%] p-3">
                    <div className="border rounded">
                        two
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signup;