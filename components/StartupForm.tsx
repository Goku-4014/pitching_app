"use client"
import React, { useActionState, useState } from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import { formSchema } from '@/lib/validation';
import { z } from 'zod';
// import { Result } from 'postcss';


const StartupForm = () => {
     const [errors, setErrors] = useState<Record<string,string>>({});

     const [pitch, setPitch] = useState("**Hello world!!!**");
     
     const handleFormSubmit = async (prevState: any, formData: FormData) => {
        try {
          // Extracting values from the FormData object
          const formValues = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            category: formData.get("category") as string,
            link: formData.get("link") as string,
            pitch, 
          };
      
          // Validate the form values using `formSchema`
          await formSchema.parseAsync(formValues);
      
          console.log("Form Values:", formValues);
          setErrors({});
      
          // Example of calling a function to create an idea
          // const result = await createIdea(prevState, formData, formValues.pitch);
          // console.log("Result:", result);
        } catch (error) {
          // Log or handle validation/submission errors
          console.error("Error:", error);
        } finally {
          // Cleanup logic if necessary
        }
      };

      const [state, formAction, isPending] = useActionState(handleFormSubmit, {
        error: '', // Initial error state
        status: 'INITIAL', // Initial status state
      });
      
      

     


  return (
    <form action={formAction }className='startup-form'>
        <div>
            <label htmlFor='title' className='startup-form_label'>
                Title
            </label>
            <Input id='title' name='title'  className='startup-form_input' required placeholder=' Startup title'/>
            {errors.title && <p className='startup-form_error'>{errors.title}</p>}

        </div>

        <div>
            <label htmlFor='description' className='startup-form_label'>
                Description
            </label>
            <Textarea id='description' name='description'  className='startup-form_textarea' required placeholder=' Startup Description'/>
            {errors.description && <p className='startup-form_error'>{errors.description}</p>}

        </div>

        <div>
            <label htmlFor='category' className='startup-form_label'>
                Category
            </label>
            <Input id='category' name='Category'  className='startup-form_input' required placeholder=' Startup Category (eg. Technology, Education...)'/>
            {errors.category && <p className='startup-form_error'>{errors.category}</p>}

        </div>

        <div>
            <label htmlFor='link' className='startup-form_label'>
                Image URL
            </label>
            <Input id='link' name='link'  className='startup-form_input' required placeholder=' Startup image URL'/>
            {errors.link && <p className='startup-form_error'>{errors.link}</p>}

        </div>


        <div data-color-mode ='light'>
            <label htmlFor='pitch' className='startup-form_label'>
                Pitch
            </label>
            <MDEditor
              value={pitch}
              onChange={(value) => setPitch(value as string)}
              id='pitch'
              preview='edit'
              height={300}
              style={{borderRadius:20,overflow: "hidden"}}
              textareaProps={{
                placeholder: "Breifly descriibe your idea and what problems it solves"
              }}
              previewOptions={{
                disallowedElements:["style"]
              }}

            />
           
            {errors.pitch&& <p className='startup-form_error'>{errors.pitch}</p>}

        </div>

        <Button
        type='submit'
        className='startup-form_btn text-white'
        disabled={isPending}
        >
        {isPending ? "Submitting...": "Submit your Pitch"}
        <Send className='size-6 ml-2'/>
        </Button>


    </form>
  )
}

export default StartupForm
