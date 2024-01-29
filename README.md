# GitHub Pages & Azure Static Page  Setup:
## Using the [education/codespaces-project-template-js](https://github.com/education/codespaces-project-template-js) 
<br><br>





### Upload Your Portfolio to GitHub Pages:

**I recomend to use  de codspace**
![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/4b6854d5-f9d7-4877-8698-07860fbb90a4)
<br><br>

1. Modify your `package.json` file:

   ```json
   "homepage": "https://(YourGitHubName).github.io/(YourRepository)",
   "build-gh": "parcel build --public-url 'https://(YourGitHubName).github.io/(YourRepository)'",
    
1. In the terminal run:

   ```json
   "@ ➜ /workspaces/(here is your repo by defect) (main)": "npm run deploy",
![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/460e7a61-01ac-43ea-bfb0-19daa34fb8b9)
... and press enter
<br><br>

3. Go to your GitHub repository settings and verify that the branch "gh-pages" exists. If it doesn't, create it. Wait and update until you get your GitHub Pages link.
![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/a98df726-84f6-4b82-b253-ee10c30ccc21)





<br><br><br>
### Setting Up Azure:
Now for Azure, go to azure portal and create a new static page.

![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/4b6c9221-50dd-4ffe-bce0-ee7c545e80b6)
<br>

#### **You must have an Azure subscription, which you can get by following this link: [Azure Subscription](https://learn.microsoft.com/es-es/visualstudio/subscriptions/new-subscriber). and also go to [Monthly Azure credits for Visual Studio subscribers](https://azure.microsoft.com/es-mx/pricing/member-offers/credit-for-visual-studio-subscribers/)**
<br>


- Enter your Azure Subscription and Create a new resource group in Azure (the name doesn't matter, just ensure it doesn't contain invalid characters).

![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/b3eb2bb0-8f9f-4180-80e7-a88a788f8f36)
<br><br>

- Name your application (again, the name doesn't matter, just avoid invalid characters).
- Choose the free plan and set the location to the one closest to you.
![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/9c5be9c6-2075-44ce-bdc7-f090907c984b)
<br><br>


#### Linking GitHub to Azure:
- Select GitHub as the source, and in the organization field, enter your GitHub username.
- After this, you should be able to select your repositories. Choose the repository where you have hosted your portfolio and select the "gh-pages" branch.
- Optional Preset Values:
- The last field for preset values is not necessary to fill.
- Final Setup: Click on "Review and Create."

![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/c261a662-7d67-4ee0-bffa-ba2d459a47d2)
<br><br>

Go to the Azure resource you just created, and you will find a URL. Once everything has been updated, click on this URL, and you will see your application hosted on Azure.
<br>

![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/3d83e021-a876-4558-bdb7-37df3ca73e7d)
![image](https://github.com/JoseEmmanuelVG/SATechnicalOnboarding_JS_Portfolio-JEVG/assets/89156254/bbb0f954-0588-4a34-9ef4-de5b0c6b7ee4)

