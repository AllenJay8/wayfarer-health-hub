
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Heart, CreditCard, Smartphone, Building } from 'lucide-react';

const donationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  donationType: z.string().min(1, 'Please select donation type'),
  amount: z.string().min(1, 'Please enter donation amount'),
  paymentMethod: z.string().min(1, 'Please select payment method'),
  accountName: z.string().min(2, 'Account name is required'),
  accountNumber: z.string().min(1, 'Account number is required'),
  bankName: z.string().optional(),
  message: z.string().optional(),
  isAnonymous: z.boolean().optional(),
});

type DonationForm = z.infer<typeof donationSchema>;

const DonorsPage = () => {
  const form = useForm<DonationForm>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      donationType: '',
      amount: '',
      paymentMethod: '',
      accountName: '',
      accountNumber: '',
      bankName: '',
      message: '',
      isAnonymous: false,
    },
  });

  const onSubmit = (data: DonationForm) => {
    console.log('Donation data:', data);
    alert('Thank you for your generous donation! We will process your contribution and send you a confirmation.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support THOTW</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous donations help us provide quality healthcare services to our community. 
            Every contribution makes a difference in someone's life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Medical Equipment</h3>
            <p className="text-gray-600">Help us acquire modern medical equipment to serve patients better</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">💊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Medicine Fund</h3>
            <p className="text-gray-600">Support our medicine assistance program for underprivileged patients</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Facility Improvement</h3>
            <p className="text-gray-600">Contribute to expanding and improving our healthcare facilities</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Make a Donation</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+63 9XX XXX XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="donationType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Donation Type *</FormLabel>
                      <FormControl>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent" {...field}>
                          <option value="">Select donation type</option>
                          <option value="medical-equipment">Medical Equipment</option>
                          <option value="medicine-fund">Medicine Fund</option>
                          <option value="facility-improvement">Facility Improvement</option>
                          <option value="general">General Donation</option>
                          <option value="emergency-fund">Emergency Fund</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Donation Amount (PHP) *</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0.00" min="1" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method *</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { value: 'gcash', label: 'GCash', icon: <Smartphone className="h-5 w-5" /> },
                          { value: 'paymaya', label: 'PayMaya', icon: <CreditCard className="h-5 w-5" /> },
                          { value: 'bdo', label: 'BDO', icon: <Building className="h-5 w-5" /> },
                          { value: 'bpi', label: 'BPI', icon: <Building className="h-5 w-5" /> },
                          { value: 'metrobank', label: 'Metrobank', icon: <Building className="h-5 w-5" /> },
                          { value: 'chinabank', label: 'China Bank', icon: <Building className="h-5 w-5" /> },
                        ].map((method) => (
                          <label key={method.value} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                            <input
                              type="radio"
                              value={method.value}
                              checked={field.value === method.value}
                              onChange={() => field.onChange(method.value)}
                              className="text-green-600 focus:ring-green-500"
                            />
                            <div className="flex items-center space-x-2">
                              {method.icon}
                              <span className="text-sm font-medium">{method.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="accountName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Name on account" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="accountNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Account/Mobile Number *</FormLabel>
                      <FormControl>
                        <Input placeholder="Account or mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {form.watch('paymentMethod') && ['bdo', 'bpi', 'metrobank', 'chinabank'].includes(form.watch('paymentMethod')) && (
                <FormField
                  control={form.control}
                  name="bankName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bank Branch (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Bank branch location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Leave a message or dedication..." 
                        className="min-h-[80px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anonymous"
                  className="text-green-600 focus:ring-green-500 rounded"
                  {...form.register('isAnonymous')}
                />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  Make this donation anonymous
                </label>
              </div>

              <div className="pt-6">
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                  Donate Now
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default DonorsPage;
