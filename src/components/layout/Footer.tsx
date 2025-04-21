
import React from "react";
import { Github, Instagram, Linkedin, Twitter, Mail, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-auto bg-background">
      <div className="container mx-auto px-8 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">StackLite</h3>
            <p className="text-sm text-muted-foreground">
              A community-driven platform for developers to share knowledge and grow together.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/adityaFE" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/aditya-anand-4a843516a/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/adiiiii.exe/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://portfolio-adityafe.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <BriefcaseBusiness size={18} />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/posts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Questions
                </Link>
              </li>
              <li>
                <Link to="/tags" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Popular Tags
                </Link>
              </li>
              <li>
                <a href="https://github.com/adityaFE/stack-overflow" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <a href="mailto:adityaanandofficial@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={16} />
              adityaanandofficial@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} StackLite. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
