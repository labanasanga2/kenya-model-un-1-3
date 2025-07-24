import { useState } from 'react';
import { Check, User, Users, Trophy, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    role: '',
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    chapter: '',
    committee: '',
    experience: '',
    motivation: '',
    terms: false
  });
  const { toast } = useToast();

  const steps = [
    { number: 1, title: 'Role Selection', icon: User },
    { number: 2, title: 'Personal Info', icon: Users },
    { number: 3, title: 'Preferences', icon: Trophy },
    { number: 4, title: 'Confirmation', icon: Check }
  ];

  const delegateTypes = [
    {
      type: 'delegate',
      title: 'Delegate',
      description: 'Represent a country in committee sessions',
      price: 'KES 5,000',
      features: ['Committee Assignment', 'Conference Materials', 'Meals & Refreshments', 'Certificate of Participation']
    },
    {
      type: 'chairperson',
      title: 'Chairperson',
      description: 'Lead committee sessions and moderate debates',
      price: 'KES 3,000',
      features: ['Leadership Training', 'Chair Handbook', 'VIP Networking', 'Chair Certificate']
    },
    {
      type: 'organizer',
      title: 'Organizer',
      description: 'Support conference logistics and operations',
      price: 'KES 2,000',
      features: ['Behind-the-scenes Access', 'Logistics Training', 'Organizer Certificate', 'Network Building']
    }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Registration Successful!",
      description: "Welcome to KMUN 2026! Check your email for confirmation details.",
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-playfair">
            Register for <span className="text-primary">KMUN 2026</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us at UNON Gigiri for Kenya's premier Model UN conference
          </p>
          <div className="mt-6 flex items-center justify-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">March 15-17, 2026</span>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-primary text-primary-foreground' :
                    isCompleted ? 'bg-secondary text-secondary-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-1 mx-4 ${
                      isCompleted ? 'bg-secondary' : 'bg-muted'
                    }`}></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <Card className="committee-card">
          <CardContent className="p-8">
            {/* Step 1: Role Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Role</h2>
                  <p className="text-muted-foreground">Select how you'd like to participate in KMUN 2026</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {delegateTypes.map((type) => (
                    <Card key={type.type} className={`cursor-pointer transition-all ${
                      formData.role === type.type ? 'ring-2 ring-primary' : 'hover:shadow-lg'
                    }`} onClick={() => setFormData({...formData, role: type.type})}>
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{type.title}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                        <div className="text-2xl font-bold text-primary">{type.price}</div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Personal Information</h2>
                  <p className="text-muted-foreground">Tell us about yourself</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University</Label>
                    <Select onValueChange={(value) => setFormData({...formData, university: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your university" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uon">University of Nairobi</SelectItem>
                        <SelectItem value="ku">Kenyatta University</SelectItem>
                        <SelectItem value="strathmore">Strathmore University</SelectItem>
                        <SelectItem value="usiu">USIU-Africa</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Committee Preferences</h2>
                  <p className="text-muted-foreground">Choose your committee and share your motivation</p>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="committee">Preferred Committee</Label>
                    <Select onValueChange={(value) => setFormData({...formData, committee: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred committee" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ga">General Assembly</SelectItem>
                        <SelectItem value="icj">International Court of Justice</SelectItem>
                        <SelectItem value="ilc">International Law Commission</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">MUN Experience Level</Label>
                    <Select onValueChange={(value) => setFormData({...formData, experience: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 conferences)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-5 conferences)</SelectItem>
                        <SelectItem value="advanced">Advanced (5+ conferences)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join KMUN?</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                      placeholder="Share your motivation for joining KMUN..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Confirm Registration</h2>
                  <p className="text-muted-foreground">Review your information before submitting</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                    <div>
                      <strong>Name:</strong> {formData.firstName} {formData.lastName}
                    </div>
                    <div>
                      <strong>Email:</strong> {formData.email}
                    </div>
                    <div>
                      <strong>Role:</strong> {formData.role}
                    </div>
                    <div>
                      <strong>Committee:</strong> {formData.committee}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.terms}
                      onCheckedChange={(checked) => setFormData({...formData, terms: checked as boolean})}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the KMUN terms and conditions and privacy policy
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="btn-outline-diplomatic"
              >
                Back
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={currentStep === 1 && !formData.role}
                  className="btn-diplomatic"
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!formData.terms}
                  className="btn-diplomatic"
                >
                  Submit Registration
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;