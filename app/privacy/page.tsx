import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function TermsAndConditions() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <Image
                                src="/images/logo.svg"
                                alt="CommissionHub Logo"
                                width={40}
                                height={40}
                                className="mr-2"
                            />
                            <span className="text-xl font-bold">CommissionHub</span>
                        </div>
                        <Button asChild>
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-12 text-gray-700">
                {/* Page Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                {/* Introduction */}
                <section className="mb-12">
                    <p>
                        This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </p>
                    <p className="mt-4">
                        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
                    </p>
                </section>

                {/* Interpretation and Definitions */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Interpretation and Definitions</h2>

                    {/* Interpretation */}
                    <h3 className="text-xl font-semibold mb-2">Interpretation</h3>
                    <p className="mb-4">
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                    {/* Definitions */}
                    <h3 className="text-xl font-semibold mb-2">Definitions</h3>
                    <p className="mb-4">For the purposes of this Privacy Policy:</p>

                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Account:</strong> A unique account created for You to access our Service or parts of our Service.</li>
                        <li><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</li>
                        <li><strong>Company:</strong> (referred to as "We", "Us", or "Our") refers to Commissionhub.</li>
                        <li><strong>Cookies:</strong> Small files placed on Your device by a website, containing details of Your browsing history.</li>
                        <li><strong>Country:</strong> Refers to United States</li>
                        <li><strong>Device:</strong> Any device that can access the Service such as a computer, cellphone, or tablet.</li>
                        <li><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</li>
                        <li><strong>Service:</strong> Refers to the Commissionhub mobile app</li>
                        <li><strong>Service Provider:</strong> Any natural or legal person who processes data on behalf of the Company.</li>
                        <li><strong>Usage Data:</strong> Data collected automatically, generated by the use of the Service or the Service infrastructure itself.</li>
                        <li><strong>Website:</strong> Refers to Commissionhub, accessible from https://thecommissionhub.com</li>
                        <li><strong>You:</strong> The individual accessing or using the Service.</li>
                    </ul>
                </section>

                {/* Collecting and Using Your Personal Data */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Collecting and Using Your Personal Data</h2>

                    {/* Types of Data Collected */}
                    <h3 className="text-xl font-semibold mb-2">Types of Data Collected</h3>

                    {/* Personal Data */}
                    <h4 className="text-lg font-semibold mb-2">Personal Data</h4>
                    <p className="mb-4">
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                    </ul>
                </section>

                {/* Use of Your Personal Data */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">Use of Your Personal Data</h3>
                    <p>
                        The Company may use Personal Data for the following purposes:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To provide and maintain our Service.</li>
                        <li>To manage Your Account and registration as a user.</li>
                        <li>To contact You via email, phone, or SMS regarding updates.</li>
                        <li>To manage Your requests and provide customer support.</li>
                        <li>For business transfers, where Your data may be transferred as part of a merger or acquisition.</li>
                    </ul>
                </section>

                {/* Retention of Your Personal Data */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">Retention of Your Personal Data</h3>
                    <p>
                        The Company will retain Your Personal Data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including complying with legal obligations.
                    </p>
                </section>

                {/* Disclosure of Your Personal Data */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">Disclosure of Your Personal Data</h3>
                    <p>
                        Your Personal Data may be disclosed in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>In the event of a business transaction (e.g., merger or sale).</li>
                        <li>For legal reasons if required by law enforcement.</li>
                    </ul>
                </section>

                {/* Children's Privacy */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">Children's Privacy</h3>
                    <p>
                        Our Service does not address anyone under the age of 18. If We become aware that a child under 18 has provided Us with Personal Data, We will take steps to remove that information.
                    </p>
                </section>

                {/* Contact Us */}
                <section className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, You can contact us by email at: <a href="mailto:founders@labfox.studio" className="text-blue-600">founders@labfox.studio</a></p>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-4">
                <div className="container mx-auto px-4">
                    <p>&copy; 2024 CommissionHub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}