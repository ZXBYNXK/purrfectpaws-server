module.exports = contactUs = (data) => {
    const {
        email, subject, 
        message, firstName, 
        lastName, phone,
        startDate, endDate, 
        locationState, locationCity, 
        addressLine1, addressLine2 
    } = data;

        
    const sd = new Date(startDate);
    const ed = new Date(endDate);

    return `<div style="width: 100%;display:flex;flex-direction:column;font-family:sans-serif;">
    <div>
        <strong>Name:&nbsp;</strong>
        <span>${firstName} ${lastName}</span><br />

        <strong>Email:&nbsp;</strong>
        <span><a href="mailto:${email}">${email}</a></span> <br />

        <strong>Phone:&nbsp;</strong>
        <span><a href="tel:${phone}">${phone}</a></span><br />

        <strong>Address Line 1:&nbsp;</strong>
        <span>${addressLine1}</span><br />
        
        <strong>Address Line 2:&nbsp;</strong>
        <span>${addressLine2 || "N/A"}</span><br />
        
        <strong>State:&nbsp;</strong>     
        <span>
            ${locationState}
        </span><br />
        
        <strong>City:&nbsp;</strong>         
        <span>
            ${locationCity}
        </span><br />
        
        <strong>Message:&nbsp;</strong>
        <span>${message}</span><br />
        
        <strong>Start Date:&nbsp;</strong>                
        <span>${sd.toDateString()}</span><br />                

        <strong>End Date:&nbsp;</strong>
        <span>${ed.toDateString()}</span><br />                

        <img style="height: 90px;" src="https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666376361/purrfect-paws/logo_sriet4.webp"></img>
    </div>
</div>`

}