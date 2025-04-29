import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="font-serif text-gray-800">
            {/* Hero Section */}
            <div 
                className="relative h-40 flex items-center justify-center"
            >
                <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                <div className="text-center max-w-2xl px-10 py-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get <span className='text-rose-500'>In Touch</span></h1>
                    <p className="text-lg text-gray-700">
                        We'd love to hear from you! Reach out for inquiries, product recommendations, or just to say hello.
                    </p>
                </div>
                </div>
            </div>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a <span className='text-rose-500'>Message</span></h2>
                        <p className="text-gray-600 mb-8">Our team typically responds within 24 hours</p>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        placeholder="Enter your name" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        placeholder="Enter your email" 
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition"
                                    />
                                </div>
                            </div>
                        
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select 
                                    id="subject" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition bg-white"
                                >
                                <option value="">Select a subject</option>
                                <option value="product">Product Inquiry</option>
                                <option value="order">Order Status</option>
                                <option value="skincare">Skincare Advice</option>
                                <option value="other">Other</option>
                                </select>
                            </div>
                        
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    placeholder="How can we help you?" 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition"
                                ></textarea>
                            </div>
                        
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-lg shadow-lg h-full border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                        <p className="text-gray-600 mb-8">Feel free to reach out through any of these channels</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-rose-50 p-3 rounded-full mr-4">
                                <Phone className="text-rose-600 w-5 h-5" />
                                </div>
                                <div>
                                <h4 className="font-semibold text-gray-900">Phone</h4>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        
                            <div className="flex items-start">
                                <div className="bg-rose-50 p-3 rounded-full mr-4">
                                <Mail className="text-rose-600 w-5 h-5" />
                                </div>
                                <div>
                                <h4 className="font-semibold text-gray-900">Email</h4>
                                <p className="text-gray-600">hello@glowskincare.com</p>
                                </div>
                            </div>
                        
                        <div className="flex items-start">
                                <div className="bg-rose-50 p-3 rounded-full mr-4">
                                    <MapPin className="text-rose-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Our Boutique</h4>
                                    <p className="text-gray-600">123 Beauty Lane, Suite 100<br />New York, NY 10001</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-rose-50 p-3 rounded-full mr-4">
                                    <Clock className="text-rose-600 w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Hours</h4>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9am - 6pm<br />
                                        Saturday: 10am - 4pm<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        
                            <div className="pt-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Follow Us</h4>
                                <div className="flex space-x-4">
                                <a 
                                    href="#" 
                                    className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-3 rounded-full hover:shadow-lg transition hover:scale-110"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a 
                                    href="#" 
                                    className="bg-gray-800 text-white p-3 rounded-full hover:shadow-lg transition hover:scale-110"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a 
                                    href="#" 
                                    className="bg-gray-700 text-white p-3 rounded-full hover:shadow-lg transition hover:scale-110"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Maps Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Boutique</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Come experience our products in person at our luxurious New York location
                </p>
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256018038!2d-73.98784492423903!3d40.7484409713896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1623255670373!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    className="w-full"
                    ></iframe>
                </div>
                </div>
            </div>
        </div>
    );
}