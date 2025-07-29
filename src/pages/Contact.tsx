import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@craftcorner.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Craft Street, Art District',
      description: 'New York, NY 10001',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend: 10AM-4PM',
    },
  ];

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Most orders arrive within 3-5 business days with our standard shipping.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide! International orders typically take 7-14 business days.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer 30-day returns on all items in original condition.',
    },
    {
      question: 'Are your Hot Wheels authentic?',
      answer: 'Absolutely! All collectibles come with authenticity verification.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
                Get In Touch
              </Badge>
              
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-primary mb-6">
                We'd Love to
                <span className="text-accent"> Hear</span> From You
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our products? Need help with an order? 
                Our friendly team is here to help you find exactly what you're looking for.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className="border-0 shadow-soft hover-lift bg-gradient-card text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-playfair font-semibold text-lg mb-2 text-primary">
                      {info.title}
                    </h3>
                    <p className="font-medium mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" className="hover-lift" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" className="hover-lift" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" className="hover-lift" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" className="hover-lift" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="hover-lift resize-none"
                    />
                  </div>
                  
                  <Button size="lg" className="w-full hover-lift hover-glow">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map & Additional Info */}
              <div className="animate-slide-up">
                <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
                  Visit Our Store
                </h2>
                <p className="text-muted-foreground mb-8">
                  Come see our collection in person! Our showroom features rotating 
                  displays of featured items and exclusive pieces.
                </p>
                
                {/* Mock Map */}
                <div className="bg-muted rounded-2xl h-64 mb-8 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      123 Craft Street, Art District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-card p-6 rounded-2xl shadow-soft">
                  <h3 className="font-playfair font-semibold text-xl mb-4 text-primary">
                    Why Visit Us?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        See products up close before purchasing
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        Meet our expert team for personalized recommendations
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        Exclusive in-store collections and limited editions
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                      <span className="text-muted-foreground">
                        Free gift wrapping for purchases over $50
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about our products and services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card 
                  key={faq.question}
                  className="border-0 shadow-soft hover-lift bg-card"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <MessageCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-playfair font-semibold text-lg mb-2 text-primary">
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;