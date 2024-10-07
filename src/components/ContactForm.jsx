import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='w-full px-6 lg:px-[51px] xl:px-[71px] py-[46px] bg-[#CCCCCC80] rounded-[50px]'>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-12'>
        <div className="grid lg:grid-cols-2 gap-x-7 gap-y-8 lg:gap-y-12">
          <div>
            <input
              type="text"
              placeholder='Full name'
              className={`py-2.5 pl-3 rounded-[10px] w-full ${errors.fullName ? 'border-red-500' : ''}`}
              {...register('fullName', { required: 'Full name is required',
                pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                    message: 'Invalid full name',
                  },
               })}
              

            />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder='Email address'
              className={`py-2.5 pl-3 rounded-[10px] w-full ${errors.email ? 'border-red-500' : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder='Phone number'
              className={`py-2.5 pl-3 rounded-[10px] w-full ${errors.phoneNumber ? 'border-red-500' : ''}`}
              {...register('phoneNumber', { required: 'Phone number is required',
                pattern: {
                    value: / ^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                    message: 'Invalid phone number',
                  },
               })}
             

            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder='Subject'
              className={`py-2.5 pl-3 rounded-[10px] w-full ${errors.subject ? 'border-red-500' : ''}`}
              {...register('subject', { required: 'Subject is required' })}
            />
            {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
          </div>
        </div>

        <div>
          <textarea
            placeholder='Write your message here'
            className={`pt-2.5 h-[257px] pl-3 rounded-[10px] w-full ${errors.message ? 'border-red-500' : ''}`}
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>

       <div className="flex justify-center">
       <button
          type='submit'
          className='bg-primary text-white font-semibold rounded-full text-xl w-full lg:w-10/12 py-2.5 '>
          Send message
        </button>
       </div>
      </form>
    </div>
  );
};

export default ContactForm;
