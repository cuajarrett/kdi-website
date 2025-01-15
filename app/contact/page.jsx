"use client";

import { title } from "@/components/primitives";
import { useState } from "react";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { Form } from "@nextui-org/form";

import { sendContactEmail } from "@/utils/contact";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    setLoading(true);

    try {
      const response = await sendContactEmail(formData);
      if (response.success) {
        setSuccess(true);
        e.target.reset(); // Reset the form on success
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className={title()}>Contact Us</h1>
      <p className="mb-10 text-gray-600">
        We are looking forward to starting a project with you! Send us a message
        and we’ll respond as soon as possible.
      </p>
      <Form
        onSubmit={handleSubmit}
        validationBehavior="native" // Use native validation for fields
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <Input
          name="name"
          label="Name"
          placeholder="Enter your name"
          isRequired
          validate={(value) => {
            if (value.trim().length < 3) {
              return "Name must be at least 3 characters long";
            }
            return null;
          }}
        />
        <Input
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              return "Enter a valid email address";
            }
            return null;
          }}
        />
        <Input
          name="phone"
          label="Phone Number"
          placeholder="Enter your phone number"
          validate={(value) => {
            if (value && !/^\d{10,15}$/.test(value)) {
              return "Phone number must be 10-15 digits long";
            }
            return null;
          }}
        />
        <Input
          name="projectAddress"
          label="Project Address"
          placeholder="Enter your project address"
        />
        <Select
          name="inquiry"
          label="Inquire About"
          isRequired
          placeholder="Select an option"
          validate={(value) => {
            if (!value) {
              return "Inquiry type is required";
            }
            return null;
          }}
        >
          <SelectItem value="request-for-catalog">
            Request for Catalogue
          </SelectItem>
          <SelectItem value="living">Furniture</SelectItem>
          <SelectItem value="book-an-appointment">
            Book an Appointment
          </SelectItem>
        </Select>
        <Select
          name="showroom"
          label="Showroom"
          isRequired
          placeholder="Select a showroom"
          validate={(value) => {
            if (!value) {
              return "Showroom selection is required";
            }
            return null;
          }}
        >
          <SelectItem value="main">Main Showroom</SelectItem>
        </Select>
        <Textarea
          name="message"
          label="Message"
          placeholder="Enter your message"
          isRequired
          minRows={4}
          validate={(value) => {
            if (value.trim().length < 10) {
              return "Message must be at least 10 characters long";
            }
            return null;
          }}
          className="col-span-1 sm:col-span-2"
        />
        <Button
          type="submit"
          color="primary"
          isLoading={loading}
          className="col-span-1 sm:col-span-2"
        >
          Submit
        </Button>
      </Form>
      {success === true && (
        <p className="text-center text-green-600 mt-6">
          Message sent successfully!
        </p>
      )}
      {success === false && (
        <p className="text-center text-red-600 mt-6">
          Failed to send message. Please try again later.
        </p>
      )}
    </>
  );
}
