# GigShield – AI-Powered Parametric Insurance for Food Delivery Partners

## Problem Statement

India’s gig economy, driven by platforms like Zomato and Swiggy, relies heavily on food delivery partners who earn on a daily basis. Their income is directly dependent on their ability to work outdoors.

However, external disruptions such as extreme weather conditions, hazardous air pollution, and government-imposed restrictions often prevent them from working. These disruptions can significantly reduce their working hours or halt operations completely, leading to a 20–30% loss in income.

Currently, there is no dedicated financial protection system that compensates delivery partners for such uncontrollable income loss.

---

## Proposed Solution

GigShield is an AI-powered parametric insurance platform designed specifically for food delivery partners to protect their income from external disruptions.

Unlike traditional insurance models, GigShield:

* Does not require manual claim filing
* Uses real-time environmental data as triggers
* Automatically calculates and processes payouts

This ensures a fast, transparent, and seamless compensation experience.

---

## Objectives

* Provide financial protection against income loss due to external disruptions
* Enable automated claim processing using parametric triggers
* Offer affordable weekly subscription plans
* Integrate AI for risk assessment and fraud detection

---

## Target Persona

### Food Delivery Partners (Zomato / Swiggy) – Mumbai Focus

#### Persona Details:

* Age Group: 18–40
* Income Type: Daily earnings (₹400–₹800/day)
* Work Dependency: Outdoor conditions
* Financial Behavior: Weekly income cycles

#### Justification:

* Highly impacted by environmental conditions
* Large workforce with consistent demand
* Predictable earning patterns suitable for modeling

---

## Problem Scenarios

### 1. Heavy Rainfall

* Rainfall exceeds operational limits
* Waterlogging affects mobility
* Orders drop significantly
* Income loss: ₹200–₹400/day

### 2. Severe Air Pollution

* AQI exceeds hazardous levels (>400)
* Unsafe working conditions
* Reduced or no work

### 3. Government Curfew

* Movement restrictions imposed
* Restaurants closed
* Deliveries halted

### 4. Extreme Heat

* Temperature exceeds 42°C
* Health risk increases
* Reduced working hours

---

## Parametric Insurance Model

GigShield uses a parametric insurance approach where payouts are triggered automatically when predefined conditions are met.

Core Concept:
Event Occurs → Condition Verified → Automatic Payout

---

## Parametric Triggers

| Trigger Type | Condition   | Impact        | Action         |
| ------------ | ----------- | ------------- | -------------- |
| Rainfall     | > 50 mm/day | Delivery halt | Auto payout    |
| AQI Level    | > 400       | Unsafe work   | Auto payout    |
| Curfew       | TRUE        | No movement   | Auto payout    |
| Temperature  | > 42°C      | Reduced hours | Partial payout |

---

## Weekly Pricing Model

GigShield follows a weekly subscription model aligned with the earning cycle of delivery partners.

### Plans:

| Plan Type | Weekly Premium | Coverage per Day | Max Weekly Payout |
| --------- | -------------- | ---------------- | ----------------- |
| Basic     | ₹20            | ₹100             | ₹500              |
| Standard  | ₹35            | ₹200             | ₹1000             |
| Premium   | ₹50            | ₹300             | ₹1500             |

---

## AI/ML Integration

### 1. Dynamic Risk-Based Pricing

* Adjusts premiums based on location and historical disruption data
* Higher risk zones have slightly higher premiums

### 2. Predictive Risk Modeling

* Forecasts likelihood of disruptions
* Helps optimize pricing and coverage

### 3. Fraud Detection System

Techniques used:

* GPS-based location validation
* Cross-verification with weather data
* Duplicate claim prevention
* Behavioral anomaly detection

---

## End-to-End Workflow

1. User registers with location, platform, and average earnings
2. System performs AI-based risk assessment
3. Weekly premium is calculated
4. User subscribes to a plan
5. System continuously monitors environmental conditions
6. If a trigger condition is met, the event is detected
7. Income loss is estimated
8. Automatic payout is processed

---

## Integration Architecture

### External APIs:

* Weather API (OpenWeather)
* AQI API
* Mock data for curfew or restrictions

### Payment Integration:

* Razorpay (test mode)
* UPI simulation

---

## Tech Stack

### Frontend:

* React.js

### Backend:

* Node.js with Express

### Database:

* MongoDB

### AI/ML:

* Python (basic models or rule-based logic)

---

## Dashboard Design

### Worker Dashboard

* Active policy details
* Weekly premium
* Coverage status
* Claim history
* Earnings protected

### Admin Dashboard

* Total users
* Active policies
* Trigger events
* Fraud alerts
* Analytics on payouts

---

## Key Features

* Fully automated parametric insurance
* Weekly subscription model
* AI-based dynamic pricing
* Real-time disruption monitoring
* Intelligent fraud detection
* Instant payout simulation

---

## Future Scope

* Mobile application for wider accessibility
* Predictive alerts for upcoming disruptions
* Integration with delivery platforms
* Expansion to other gig worker segments

---

## Business Impact

* Provides financial stability to delivery partners
* Reduces uncertainty in daily earnings
* Scalable and cost-efficient model
* Encourages adoption of insurance among gig workers

---

## Conclusion

GigShield delivers a reliable and automated insurance solution tailored for food delivery partners. By leveraging AI and parametric triggers, it ensures timely and fair compensation for income loss due to external disruptions.

