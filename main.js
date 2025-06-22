window.onload = function() {
    // Get the iframe element
    var iframe = document.getElementById('embedded');
    // create the div element for the branding
    var brandingDiv = document.createElement('div');
    brandingDiv.style.height = '128px';
    brandingDiv.innerHTML = `
        <a href="https://www.pideyaa.com.mx/" target="_blank">
            <img src="branding.PNG" alt="Zapata Pizza" style="height:128px;width:128px;">
        </a>
    `;
    // place the branding div above the iframe in the body
    document.body.insertBefore(brandingDiv, iframe);
}