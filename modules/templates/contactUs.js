module.exports = contactUs = (data) => {
    const {
        email, subject,
        selectedPetSitters,
        message, firstName, 
        lastName, phone,
        startDate, endDate, 
        locationState, locationCity, 
        addressLine1, addressLine2 
    } = data;

        
    const sd = new Date(startDate);
    const ed = new Date(endDate);

    return `<div style="display:flex;flex-direction:column;font-family:sans-serif;">
    <div>
        <div>
            <strong>Contact Information:</strong> <br />
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
            <br />
        </div>
        <div>
            <br />
            <strong>Service Request:</strong> <br />

            <strong>Subject:&nbsp;</strong>
            <span>${subject}</span><br />

            <strong>Selected Pet Sitters:&nbsp;</strong> <br />
            ${selectedPetSitters.map(petSitter => `<span>${petSitter.split(":")[1]} ~ ${petSitter.split(":")[0]}</span><br />`)}

            <strong>Message:&nbsp;</strong>
            <span>${message}</span><br />
            
            <strong>Start Date:&nbsp;</strong>                
            <span>${sd.toDateString()}</span><br />                

            <strong>End Date:&nbsp;</strong>
            <span>${ed.toDateString()}</span><br />
            <br />               
        </div>
        <div>
            <img style="height: 90px;" src="https://res.cloudinary.com/dbg1cm3ro/image/upload/v1666376361/purrfect-paws/logo_sriet4.webp"></img><br />
            <span>PA: <a href="tel:412-400-4531">412-400-4531</a> | AZ: <a href="tel:480-366-4472">480-366-4472</a></span><br />
            <span><a href="mailto:PurrfectPawsPetSitting@yahoo.com">PurrfectPawsPetSitting@yahoo.com</a></span> <br />
            <span>Website: <a href="https://www.BookPetSitting.com">BookPetSitting.com</a></span> <br />
        </div>
    </div>
</div>`

}