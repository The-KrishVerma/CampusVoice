import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "krishverma060306@gmail.com",
      href: "mailto:krishverma060306@gmail.com"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91-8816920603",
      href: "tel:+918816920603"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Ambala, Haryana, India",
      href: "https://maps.google.com/?q=Ambala,Haryana,India"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      await emailjs.send(
        'service_7y3l2u9', // service_id
        'template_du5ukui', // template_id
        templateParams,
        'Z-WLRcVjZhyrXd7XB' // public_key
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 gradient-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-accent">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborative projects, 
              or just having a conversation about technology and innovation. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-md border border-white/10 hover:border-accent/50 hover:bg-card/50 transition-all duration-300 group"
                >
                  <div className="text-2xl animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-accent transition-colors duration-200">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up">
            <Card className="bg-card border-border card-shadow h-full">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-accent">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="Your name"
                        className="bg-background border-border focus:border-accent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="Your email"
                        className="bg-background border-border focus:border-accent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject"
                      name="subject"
                      type="text" 
                      placeholder="Message subject"
                      className="bg-background border-border focus:border-accent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      className="bg-background border-border focus:border-accent resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow-accent"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;