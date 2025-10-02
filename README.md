# README -- QCM Risk (Frontend React)

## Description

This project is a **React application** that allows a user to complete
an **interactive medical questionnaire (QCM)**.\
The goal is to calculate a **cardiometabolic risk score** (low,
moderate, high, very high) based on the answers provided, and then
display **personalized recommendations**.

The test is deployed and integrated into a WordPress page of **IHU
ICAN**:\
https://ihuican.org/testrisquecardiometabolique/

<img width="1565" height="795" alt="image" src="https://github.com/user-attachments/assets/dbd6967a-ff1f-49d3-b7d1-4b1c6d013960" />

<img width="1802" height="829" alt="image" src="https://github.com/user-attachments/assets/5856a90b-1324-4eb1-b71f-bf9be2e08e7f" />



------------------------------------------------------------------------

## Features

-   Welcome page (**IntroPage**) with a *Start* button and anti-bot
    protection (honeypot field).\
-   **Interactive QCM** with:
    -   Multiple-choice questions\
    -   Secure numeric fields (height/weight encrypted with **AES --
        CryptoJS**)\
    -   Automatic score calculation including **BMI**\
    -   Approximate score handling if some key data is missing\
-   **Circular progress bar** (component `CircularProgress`)\
-   Results page (**FinalPage**) with:
    -   Total score\
    -   Risk interpretation (low → very high)\
    -   Personalized recommendations\
    -   Warning message if some data is incomplete\

------------------------------------------------------------------------

## Technologies Used

-   **React (create-react-app)**\
-   **CryptoJS** (AES encryption for sensitive data)\
-   **CSS** (animations, quiz UI, circular progress bar)

------------------------------------------------------------------------

## Installation and Setup

1.  **Clone the project**

``` bash
git clone https://github.com/your-profile/qcm-risk-react.git
cd qcm-app
```

2.  **Install dependencies**

``` bash
npm install
```

3.  **Set up the AES encryption key** Create a `.env` file at the
    project root:

```{=html}
<!-- -->
```
    REACT_APP_SECRET_KEY=your_secret_key

4.  **Start the application**

``` bash
npm start
```

5.  **Access the app** http://localhost:3000

------------------------------------------------------------------------

## Usage Example

1.  The user clicks **Start**.\
2.  They answer the **14 questions** of the QCM.\
3.  The **score is automatically calculated** (including BMI).\
4.  A **personalized results page** is displayed with recommendations on the IHU ICAN website.
