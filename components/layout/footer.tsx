export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-8 xl:px-0">

                <div className="flex flex-col md:flex-row justify-between">

                    {/* ini buat brandnya */}
                    <div className="mb-10 md:mb-0">
                        <h1 className="text-4xl font-bold tracking-wide">
                            PLACEHOLDER
                        </h1>
                        <p className="mt-3 text-sm text-gray-400 max-w-xs">
                            Crafting timeless fragrances that define elegance and identity.
                        </p>
                    </div>

                    {/* semua link */}
                    <div className="flex flex-col sm:flex-row gap-14">

                        {/* quick access */}
                        <div>
                            <h2 className="font-semibold mb-4">Quick Access</h2>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    Collections
                                </li>
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    Best Sellers
                                </li>
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    New Arrivals
                                </li>
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    About
                                </li>
                            </ul>
                        </div>

                        {/* support */}
                        <div>
                            <h2 className="font-semibold mb-4">Customer Support</h2>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    FAQ
                                </li>
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    Shipping & Delivery
                                </li>
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    Returns & Refunds
                                </li>
                            </ul>
                        </div>

                        {/* support */}
                        <div>
                            <h2 className="font-semibold mb-4">Contact</h2>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    Email Support
                                </li>
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    WhatsApp
                                </li>
                                <li className="cursor-pointer hover:text-white transition-colors">
                                    Store Address
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* bagian bawah */}
                <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-3">

                    <p>
                        © {new Date().getFullYear()} Your Brand. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <span className="cursor-pointer hover:text-white transition-colors">
                            Privacy Policy
                        </span>
                        <span className="cursor-pointer hover:text-white transition-colors">
                            Terms
                        </span>
                        <span className="cursor-pointer hover:text-white transition-colors">
                            Cookies
                        </span>
                    </div>

                </div>

            </div>
        </footer>
    );
}