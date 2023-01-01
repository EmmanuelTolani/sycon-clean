import { useState, React } from "react";
import FormElement from "../Form/FormElement";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (values.phoneNumber.length < 9 || values.phoneNumber.length > 15) {
    errors.phoneNumber = "Enter a valid phone number";
  }
  if (!values.serviceType) {
    errors.serviceType = "Required";
  } else if (values.serviceType.value === "") {
    errors.serviceType = "Select a valid service type";
  }
  if (!values.bedrooms) {
    errors.bedrooms = "Required";
  } else if (values.bedrooms === "") {
    errors.bedrooms = "Select the amount of bedrooms you have";
  }
  if (!values.bathrooms) {
    errors.bathrooms = "Required";
  } else if (values.bathrooms === "") {
    errors.bathrooms = "Select the amount of bathrooms you have";
  }
  if (!values.kitchens) {
    errors.kitchens = "Required";
  } else if (values.kitchens === "") {
    errors.kitchens = "Select the amount of kitchens you have";
  }
  if (!values.dirtiness) {
    errors.dirtiness = "Required";
  } else if (values.dirtiness === "") {
    errors.dirtiness = "Select the dirtiness level";
  }
  if (!values.address) {
    errors.address = "Required";
  } else if (values.address === "") {
    errors.address = "Enter your address";
  }
  if (!values.city) {
    errors.city = "Required";
  } else if (values.city === "") {
    errors.city = "Enter your city";
  }
  if (!values.state) {
    errors.state = "Required";
  } else if (values.state === "") {
    errors.state = "Enter your province";
  }
  if (!values.postalCode) {
    errors.postalCode = "Required";
  } else if (!/^(?:[A-Z]\d[A-Z][ -]?\d[A-Z]\d)$/i.test(values.postalCode)) {
    errors.postalCode = "Invalid postal code";
  }
  if (!values.date) {
    errors.date = "Required";
  } else if (values.date == null) {
    errors.date = "How often do you need a clean?";
  }
  if (!values.frequency) {
    errors.frequency = "Required";
  } else if (values.frequency == null) {
    errors.frequency = "How often do you need a clean?";
  }
  if (!values.termsAgreement) {
    errors.termsAgreement = "Required";
  } else if (values.termsAgreement == null) {
    errors.termsAgreement = "You didn't agree to the terms";
  }
  return errors;
};

const BookOnline = () => {
  const [freq, selectfreq] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      serviceType: "",
      bedrooms: 0,
      bathrooms: 0,
      kitchens: 0,
      dirtiness: "",
      frequency: "",
      date: "",
      time: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      specialInstructions: "",
      apartmentNO: "",
      discount: "",
      termsAgreement: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  function showValue(e) {
    e.preventDefault();
    formik.setFieldValue("frequency", e.currentTarget.value);
    selectfreq(e.currentTarget.value);
  }
  return (
    <form className="bookOnline" onSubmit={formik.handleSubmit}>
      <div className="bookOnline-container">
        <div className="bookOnline-top">
          <h2>Complete your booking</h2>
          <p>Fill the information below to finalise your booking.</p>
        </div>
        {/* Start User Name, Last Name, Email Address, Phone Number */}
        <div className="bookingform-group">
          <h2>Who are you?</h2>
          <p>
            This information will be used to contact you about your service.
          </p>
          <FormElement>
            <div className="halfwidth">
              <label htmlFor="First Name">First Name</label>
              <input
                id="firstName"
                name="firstName"
                className="frameInput1"
                type="text"
                placeholder="First Name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="halfwidth">
              <label htmlFor="Last Name">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                className="frameInput1"
                type="text"
                placeholder="Last Name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </div>
          </FormElement>
          <FormElement>
            <div className="halfwidth">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                className="frameInput1"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="halfwidth">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                className="frameInput1"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div>{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
          </FormElement>
        </div>
        {/*End User Name, Last Name, Email Address, Phone Number */}
        {/*Start select Service Type */}
        <div className="bookingform-group">
          <FormElement>
            <div className="fullwidth">
              <label htmlFor="serviceType">Choose service type</label>
              <select
                className="frameInput2"
                id="serviceType"
                name="serviceType"
                onChange={formik.handleChange}
                value={formik.values.serviceType}
                onBlur={formik.handleBlur}
              >
                <option value={""}>Please select a service</option>
                <option value="regular">Regular</option>
                <option value="deep-clean">Deep Clean</option>
                <option value="moving-clean">Move In / Move Out</option>
              </select>
              {formik.touched.serviceType && formik.errors.serviceType ? (
                <div>{formik.errors.serviceType}</div>
              ) : null}
            </div>
          </FormElement>
        </div>
        {/* End select Service Type */}
        {/* Start Home Specifications for cleaning */}
        <div className="bookingform-group">
          <h2>Tell us about your home</h2>
          <FormElement>
            <div className="halfwidth">
              <label htmlFor="bedrooms">Bedrooms</label>
              <select
                name="bedrooms"
                id="bedrooms"
                className="frameInput2"
                onChange={formik.handleChange}
                value={formik.values.bedrooms}
                onBlur={formik.handleBlur}
              >
                <option value={""}>Please select an option</option>
                <option value={1}>1 Bedroom</option>
                <option value={2}>2 Bedroom</option>
                <option value={3}>3 Bedroom</option>
                <option value={4}>4 Bedroom</option>
                <option value={5}>5 Bedroom</option>
                <option value={6}>6 Bedroom</option>
              </select>
              {formik.touched.bedrooms && formik.errors.bedrooms ? (
                <div>{formik.errors.bedrooms}</div>
              ) : null}
            </div>
            <div className="halfwidth">
              <label htmlFor="bathrooms">Bathrooms</label>
              <select
                name="bathrooms"
                id="bathrooms"
                className="frameInput2"
                onChange={formik.handleChange}
                value={formik.values.bathrooms}
                onBlur={formik.handleBlur}
              >
                <option value={""}>Please select an option</option>
                <option value={1}>1 Bathroom</option>
                <option value={2}>2 Bathroom</option>
                <option value={3}>3 Bathroom</option>
                <option value={4}>4 Bathroom</option>
                <option value={5}>5 Bathroom</option>
                <option value={6}>6 Bathroom</option>
              </select>
              {formik.touched.bathrooms && formik.errors.bathrooms ? (
                <div>{formik.errors.bathrooms}</div>
              ) : null}
            </div>
          </FormElement>
          <FormElement>
            <div className="halfwidth">
              <label htmlFor="kitchens">Kitchens</label>
              <select
                name="kitchens"
                id="kitchens"
                className="frameInput2"
                onChange={formik.handleChange}
                value={formik.values.kitchens}
                onBlur={formik.handleBlur}
              >
                <option value={""}>Please select an option</option>
                <option value={1}>1 Kitchen</option>
                <option value={2}>2 Kitchen</option>
                <option value={3}>3 Kitchen</option>
              </select>
              {formik.touched.kitchens && formik.errors.kitchens ? (
                <div>{formik.errors.kitchens}</div>
              ) : null}
            </div>
            <div className="halfwidth">
              <label htmlFor="dirtiness">How dirty is your place?</label>
              <select
                className="frameInput2"
                name="dirtiness"
                id="dirtiness"
                onChange={formik.handleChange}
                value={formik.values.dirtiness}
                onBlur={formik.handleBlur}
              >
                <option value={""}>Please select an option</option>
                <option value={"slightly-dirty"}>Slightly Dirty</option>
                <option value={"pretty-dirty"}>Pretty Dirty</option>
                <option value={"very-dirty"}>Very Dirty</option>
              </select>
              {formik.touched.dirtiness && formik.errors.dirtiness ? (
                <div>{formik.errors.dirtiness}</div>
              ) : null}
            </div>
          </FormElement>
        </div>
        {/* End of Home Specifications for cleaning */}
        {/* Start of Home Extras */}

        <div className="bookingform-group">
          <FormElement>
            <button className="frameDiv34" value={"oven_clean"}>
              <img
                className="iconParkSolidmicrowaveOven"
                alt=""
                src="/img/icon/oven-icon.png"
              />
              <div className="insideOven">
                <div className="insideOven1">Inside Oven</div>
              </div>
            </button>
            <button className="frameDiv34" value={"hand_wash"}>
              <img
                className="iconParkSolidmicrowaveOven"
                alt=""
                src="/img/icon/handwash-icon.png"
              />
              <div className="insideOven">
                <div className="insideOven1">Hand Wash</div>
              </div>
            </button>
            <button className="frameDiv34" value={"fridge"}>
              <img
                className="iconParkSolidmicrowaveOven"
                alt=""
                src="/img/icon/fridge-icon.png"
              />
              <div className="insideOven">
                <div className="insideOven1">Inside Fidge</div>
              </div>
            </button>
            <button className="frameDiv34" value={"garage"}>
              <img
                className="iconParkSolidmicrowaveOven"
                alt=""
                src="/img/icon/garage-icon.png"
              />
              <div className="insideOven">
                <div className="insideOven1">Inside Garage</div>
              </div>
            </button>
          </FormElement>
          <FormElement>
            <button className="frameDiv34" value={"int_windows"}>
              <img
                className="iconParkSolidmicrowaveOven"
                alt=""
                src="/img/icon/window-icon.png"
              />
              <div className="insideOven">
                <div className="insideOven1">Interior windows</div>
              </div>
            </button>
            <button className="frameDiv34" value={"cabinets"}>
              <img
                className="iconParkSolidmicrowaveOven"
                alt=""
                src="/img/icon/cabinet-icon.png"
              />
              <div className="insideOven">
                <div className="insideOven1">Inside cabinets</div>
              </div>
            </button>
            <button className="frameDiv34" value={"detail_base"}>
              <img
                className="iconParkSolidmicrowaveOven"
                alt=""
                src="/img/icon/baseb-icon.png"
              />
              <div className="insideOven">
                <div className="insideOven1">Detailed baseboards</div>
              </div>
            </button>
          </FormElement>
        </div>
        {/* End of Home Extras */}
        {/* Start of Book Service Date */}
        <div className="bookingform-group">
          <h2>When would you like to come?</h2>
          <p>
            Choose the date and arrival window* that works for you. If you need
            a last-minute appointment give us a call at (206) 294-9654. *Please
            note: Your arrival window is the block of time in which the cleaners
            may arrive.
          </p>
          <FormElement>
            <input
              name="date"
              id="date"
              type="date"
              className="frameInput2"
              min={"2022-12-15"}
              onChange={formik.handleChange}
              value={formik.values.date}
              onBlur={formik.handleBlur}
            />
            <select className="frameInput2">
              <option>Pick a time</option>
            </select>
            {formik.touched.date && formik.errors.date ? (
              <div>{formik.errors.date}</div>
            ) : null}
          </FormElement>
        </div>
        <div className="bookingform-group">
          <h2>How often?</h2>
          <p>
            It&apos;s all about matching you with the perfect clean for your
            home. Scheduling is flexible. Cancel or reschedule anytime.
            Discounts are applied based on selection.
          </p>
          <FormElement>
            <button
              name="frequency"
              id="frequency"
              className={`${
                freq === "one_time" ? "freqbutton active" : "freqbutton"
              }`}
              value={"one_time"}
              onClick={(e) => showValue(e)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="button"
            >
              One Time
            </button>
            <button
              name="frequency"
              id="frequency"
              className={`${
                freq === "weekly" ? "freqbutton active" : "freqbutton"
              }`}
              value={"weekly"}
              onClick={(e) => showValue(e)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="button"
            >
              Weekly
            </button>
            <button
              name="frequency"
              id="frequency"
              className={`${
                freq === "bi-weekly" ? "freqbutton active" : "freqbutton"
              }`}
              value={"bi-weekly"}
              onClick={(e) => showValue(e)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="button"
            >
              Bi-weekly
            </button>
            <button
              name="frequency"
              id="frequency"
              className={`${
                freq === "monthly" ? "freqbutton active" : "freqbutton"
              }`}
              value={"monthly"}
              onClick={(e) => showValue(e)}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="button"
            >
              Monthly
            </button>
            {formik.touched.frequency && formik.errors.frequency ? (
              <div>{formik.errors.frequency}</div>
            ) : null}
          </FormElement>
        </div>
        {/* End of Book Service Date */}
        {/* Start of Home Address*/}
        <div className="bookingform-group">
          <h2>What is your home address</h2>
          <p>Where would you like us to clean?</p>
          <FormElement>
            <div className="fullwidth">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                id="address"
                type="text"
                placeholder="Address"
                className="frameInput2"
                onChange={formik.handleChange}
                value={formik.values.address}
                onBlur={formik.handleBlur}
              />
              {formik.touched.address && formik.errors.address ? (
                <div>{formik.errors.address}</div>
              ) : null}
            </div>
          </FormElement>
          <FormElement>
            <div className="halfwidth">
              <label htmlFor="city">City</label>
              <input
                name="city"
                id="city"
                type="text"
                placeholder="City"
                className="frameInput1"
                onChange={formik.handleChange}
                value={formik.values.city}
                onBlur={formik.handleBlur}
              />
              {formik.touched.city && formik.errors.city ? (
                <div>{formik.errors.city}</div>
              ) : null}
            </div>
            <div className="halfwidth">
              <label htmlFor="state">Province</label>
              <input
                name="state"
                id="state"
                type="text"
                placeholder="Province"
                className="frameInput1"
                onChange={formik.handleChange}
                value={formik.values.state}
                onBlur={formik.handleBlur}
              />
              {formik.touched.state && formik.errors.state ? (
                <div>{formik.errors.state}</div>
              ) : null}
            </div>
          </FormElement>
          <FormElement>
            <div className="halfwidth">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                name="postalCode"
                id="postalCode"
                type="text"
                placeholder="Postal Code"
                className="frameInput1"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
                onBlur={formik.handleBlur}
              />
              {formik.touched.postalCode && formik.errors.postalCode ? (
                <div>{formik.errors.postalCode}</div>
              ) : null}
            </div>
            <div className="halfwidth">
              <label htmlFor="apartment">Apartment No</label>
              <input
                name="apartment"
                id="apartment"
                type="text"
                placeholder="Apartment No"
                className="frameInput1"
                onChange={formik.handleChange}
                value={formik.values.apartmentNO}
                onBlur={formik.handleBlur}
              />
            </div>
          </FormElement>
        </div>
        {/* End of Book Home Address */}
        {/* Start of Special Instructions */}
        <div className="bookingform-group">
          <label htmlFor="special-instructions">Special Instruction</label>
          <p>
            This information will be used to contact you about your service.
          </p>
          <FormElement>
            <textarea
              name="specialInstructions"
              id="specialInstructions"
              className="frameTextarea"
              placeholder="Do you have a special request? eg gate security code, special key placementetc."
              onChange={formik.handleChange}
              value={formik.values.specialInstructions}
              onBlur={formik.handleBlur}
            />
          </FormElement>
        </div>
        {/* End of Special Instructions */}
        <div className="bookingform-group">
          {/* <label htmlFor="discount">Discount Code</label>
          <FormElement>
            <input
              name="discount"
              id="discount"
              className="discount"
              placeholder="Enter Code"
              onChange={formik.handleChange}
              value={formik.values.discount}
              onBlur={formik.handleBlur}
            />
            <button className="frameButton1">
              <div className="bookNow">Apply</div>
            </button>
          </FormElement>
        </div>
        <div className="bookingform-group">
          <h2>Select Payment</h2>
          <p>Input in card details</p>
          <FormElement>
            <input className="frameInput2" placeholder="Card Number" />
          </FormElement>
          <FormElement>
            <input className="frameInput1" placeholder="MM/YY" />
            <input className="frameInput1" placeholder="CVV" />
          </FormElement>
          <div className="card-logo">
            <img
              className="paymentMethodIcon"
              alt="visa debit"
              src="img/icon/visa.png"
            />
            <img
              className="paymentMethodIcon1"
              alt="mastercard"
              src="img/icon/mastercard.png"
            />
            <img
              className="paymentMethodIcon1"
              alt="amex card"
              src="img/icon/amex.png"
            />
          </div>
          <p>
            {" "}
            I authorize SYCON Clean to charge my credit card above for agreed
            upon purchases. I understand that my information will be saved to
            file for further transactions on my account.
          </p>

          <p>
            By clicking the Book Now button you are agreeing to our Terms of
            Service and Privacy Policy.
          </p> */}
          <FormElement>
            <input
              name="termsAgreement"
              id="termsAgreement"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.termsAgreement}
              onBlur={formik.handleBlur}
            />{" "}
            <label htmlFor="termsAgreement">
              I agree to the <b>Terms of Service and Privacy Policy.</b>
            </label>
          </FormElement>
          {formik.touched.termsAgreement && formik.errors.termsAgreement ? (
            <div>{formik.errors.termsAgreement}</div>
          ) : null}
        </div>
        <button className="frameDiv98" type="submit">
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookOnline;
