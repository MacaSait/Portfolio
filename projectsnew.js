

gallery.addEventListener("click",function(){
    console.log("hello");
    document.getElementById("project_image_one").src="a.png"; 
    document.getElementById("project_image_two").src="b.png"; 
    document.getElementById("project_image_three").src="c.png"; 
    document.getElementById("project_image_four").src="d.png"; 
    project_type.innerHTML="";
    gallery.innerHTML="My Projects";
    project_description.innerHTML="";
    document.body.classList.remove("back");
    

    const hideButtons = document.querySelectorAll(".hide");
    const appearButtons = document.querySelectorAll(".uncover");

    // Mostrar botones con la clase "hide"
    hideButtons.forEach(button => {
        button.style.display = "block";
    });

    // Ocultar botones con la clase "uncover"
    appearButtons.forEach(button => {
        button.style.display = "none";
    });

})


back.addEventListener("click",function(){
    console.log("hello");
    document.getElementById("project_image_one").src="a.png"; 
    document.getElementById("project_image_two").src="b.png"; 
    document.getElementById("project_image_three").src="c.png"; 
    document.getElementById("project_image_four").src="d.png"; 
    project_type.innerHTML="";
    gallery.innerHTML="My Projects";
    project_description.innerHTML="";
    document.body.classList.add("back");

    const hideButtons = document.querySelectorAll(".hide");
    const appearButtons = document.querySelectorAll(".uncover");

    hideButtons.forEach(button => {
        button.style.display = "block";
    });

    appearButtons.forEach(button => {
        button.style.display = "none";
    });
})


retail.addEventListener("click",function(){
    console.log("seven");
    document.getElementById("project_image_one").src="one.png"; 
    document.getElementById("project_image_two").src="two.png"; 
    document.getElementById("project_image_three").src="three.png"; 
    document.getElementById("project_image_four").src=""; 
    project_type.innerHTML="Retail Projects";
    gallery.innerHTML="My Projects";
    project_description.innerHTML= "During my experience in L'Oreal Paris, I worked as a Project Manager making the follow up of the projects ensuring that went smoothly and elements were received on time. In the company I was in charge of creating the briefing for the agencies,for the correct interpretation of the idea to be executed. Coordinate the project idea with the marketing team, Ensuring that the design team and the marketing team were aligned with the idea, execution, timelines, and budgets of the project. Approval of design plans, color schemes, graphic design, and technical details for production. Weekly monitoring of production, from meetings to on-site follow-up at the production plant.Monitoring the budget of my department to maximize the number of production elements possible for the launch.Coordination with the logistics team for proper implementation. For this, I prepared an installation briefing for the elements. Additionally, the installation was designed in such a way that it would be accessible and easily executed at the point of sale. The estimated production quantities were around 2,000 units, which were distributed throughout the country. This was necessary since in Argentina, L'Oréal Paris' headquarters is located only in Buenos Aires.";
    document.body.classList.remove("back");

    const hideButtons = document.querySelectorAll(".hide");
    const appearButtons = document.querySelectorAll(".uncover");

    hideButtons.forEach(button => {
        button.style.display = "none";
    });

    appearButtons.forEach(button => {
        button.style.display = "block";
    });

})

graphic.addEventListener("click",function(){
    console.log("eight");
    document.getElementById("project_image_one").src="five.png";
    document.getElementById("project_image_two").src="six.png"; 
    document.getElementById("project_image_three").src="seven.png"; 
    document.getElementById("project_image_four").src="eight.png"; 
    project_type.innerHTML="Graphic Design";
    gallery.innerHTML="My Projects";
    project_description.innerHTML="In my experience at SAIT, while completing my Post Graduate degree in Graphic Design, we researched, analyzed, and executed various projects, ranging from graphic design, user experience, web design, to filming and recording. The proposals start by analyzing the user or client and seeking solutions, in addition to learning new tools that serve as execution mediums for the required proposals. This included creating print material, web pages, and videos, while also learning new interactions with different design programs that enhance and strengthen our potential. In this case, the proposal was to design advertising material for an event in Calgary, with jazz being the timeless, old yet modern music genre. The proposal was to create posters with a retro style, but with minimalist details that make it feel contemporary. This was achieved by playing with typography and layering geometric shapes.";
    document.body.classList.remove("back");

    const hideButtons = document.querySelectorAll(".hide");
    const appearButtons = document.querySelectorAll(".uncover");

    hideButtons.forEach(button => {
        button.style.display = "none";
    });

    appearButtons.forEach(button => {
        button.style.display = "block";
    });
})

textile.addEventListener("click",function(){
    console.log("nine");
    document.getElementById("project_image_one").src="nine.png";
    document.getElementById("project_image_two").src="ten.png"; 
    document.getElementById("project_image_three").src="eleven.png"; 
    document.getElementById("project_image_four").src="twelve.png"; 
    project_type.innerHTML="Textile and Print design";
    gallery.innerHTML="My Projects";
    project_description.innerHTML="At Olga, I was responsible for designing patterns for fabrics, using an aesthetic that was cheerful, fun, and eye-catching. I then selected the fabric based on the type of product to be created and sent the fabrics for sublimation with a sublimation producer. I coordinated quantities, budgets, and delivery dates. Based on this, I worked closely with the seamstresses to ensure the production quantities, thread color specifications, trimmings, specific cuts, measurements, and other production characteristics were accurate. I also created mockups for new pieces to be incorporated into production and managed costs to ensure production efficiency. The products were fabric items intended for outdoor use, such as tarps, mats, handbags, fruit bags, among other products.";
    document.body.classList.remove("back");

    const hideButtons = document.querySelectorAll(".hide");
    const appearButtons = document.querySelectorAll(".uncover");

    hideButtons.forEach(button => {
        button.style.display = "none";
    });

    appearButtons.forEach(button => {
        button.style.display = "block";
    });
})
 

branding.addEventListener("click",function(){
    console.log("ten");
    document.getElementById("project_image_one").src="thirteen.png";
    document.getElementById("project_image_two").src="fourteen.png"; 
    document.getElementById("project_image_three").src="fifteen.png"; 
    document.getElementById("project_image_four").src="sixteen.png"; 
    project_type.innerHTML="Branding design";
    gallery.innerHTML="My Projects";
     project_description.innerHTML="As an industrial designer and soon-to-be graphic designer, I must say that brand identity is the most important aspect of a project. One can design very beautiful pieces, but if they are not aligned with the brand, they won't work. Understanding the brand you are working with helps the project flow much better. Understanding its user, its strategy, and its message creates understanding. After all, brands are identities that represent many people, generating empathy or strength to take on new challenges, leadership, or motivation to promote a new sport or connection to enjoy something you love with the people you care about. Aligning with brands means allowing the message they seek to convey to reach you. In this exercise at SAIT, we designed brand identities by searching for a concept. Mine was based on community, so I drew inspiration from the cave paintings of early humans, who lived in small communities and worked completely as a team. That sense of group or belonging can now be seen more in groups of friends or small communities in teams, whether in sports or work, who come together to enjoy a beer.";
    document.body.classList.remove("back");

    const hideButtons = document.querySelectorAll(".hide");
    const appearButtons = document.querySelectorAll(".uncover");

    hideButtons.forEach(button => {
        button.style.display = "none";
    });

    appearButtons.forEach(button => {
        button.style.display = "block";
    });
})


