@echo off

:: Create components folders and files
mkdir src\components\NavBar
echo. > src\components\NavBar\NavBar.js
echo. > src\components\NavBar\NavBar.scss

mkdir src\components\EducationCard
echo. > src\components\EducationCard\EducationCard.js
echo. > src\components\EducationCard\EducationCard.scss

mkdir src\components\ExperienceCard
echo. > src\components\ExperienceCard\ExperienceCard.js
echo. > src\components\ExperienceCard\ExperienceCard.scss

mkdir src\components\CertificationCard
echo. > src\components\CertificationCard\CertificationCard.js
echo. > src\components\CertificationCard\CertificationCard.scss

mkdir src\components\Testimonials
echo. > src\components\Testimonials\Testimonials.js
echo. > src\components\Testimonials\Testimonials.scss

mkdir src\components\Footer
echo. > src\components\Footer\Footer.js
echo. > src\components\Footer\Footer.scss

:: Create containers folders and files
mkdir src\containers\Home
echo. > src\containers\Home\index.js
echo. > src\containers\Home\Home.scss

mkdir src\containers\Education
echo. > src\containers\Education\index.js
echo. > src\containers\Education\Education.scss

mkdir src\containers\Experience
echo. > src\containers\Experience\index.js
echo. > src\containers\Experience\Experience.scss

mkdir src\containers\Certifications
echo. > src\containers\Certifications\index.js
echo. > src\containers\Certifications\Certifications.scss

:: Create utils folder and file
mkdir src\utils
echo. > src\utils\helpers.js

:: Create main App files
echo. > src\App.js
echo. > src\App.scss

:: Create main assets and styles folders and files
mkdir src\assets\images
mkdir src\assets\styles
echo. > src\assets\styles\main.scss

echo Folders and files have been created.
