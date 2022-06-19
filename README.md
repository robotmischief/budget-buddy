![budget buddy header](readme/budget_buddy_header.png)
## BudgetBuddy
### Your friendly budget App for your empty pocket
$~$
## This is the repository of a work in progress PERN stack App
### It is in a very MVP stage but it will be updated as I learn new stuff 💪
$~$
### **Table of Contents**
1. [Link to live demo](#link-to-live-demo)
2. [UX Screencaps](#ux-screencaps)
3. [Responsive features](#responsive-features)
4. [Notes for Local deployment](#notes-for-local-deployment)
5. [Database schema](#database-schema)
6. [Nice to have features](#nice-to-have-features)

$~$

$~$

### **Link to live demo**
---
Follow [this link](https://budgetbuddyapp.netlify.app/) 🐇 to check a working App demo.

The Frontend Build is being hosted at Netlify while the Backend (PostgreSQL database included) at Heroku.

$~$

$~$

### UX Screencaps
---
If you want to quickly check the UI and UX key features of this App, please take a look at the screen captures below.

#### **Loading components:**
As the Backend and DataBase are hosted at Heroku, it is possible you have to wait until the Dynos wake up.

![loading Dynos](readme/UX_loading_dynos.gif)

$~$

$~$

#### **Adding a new record:** There are two types of records you can add money you *earn* or money you *spend*
![adding new records](readme/UX_add_new_record.gif)

$~$

$~$

#### **Updating a record:** It is possible to edit a previous record but *the type* of record it is
![updating a record](readme/UX_update_record.gif)

$~$

$~$

#### **Deleting a record:**
![deleting a record](readme/UX_delete_records.gif)

$~$

$~$

#### **Filtering the record list:** Options you can choose are *Latest 10 records, All the records, Records by type*
![filtering record list](readme/UX_filter_records.gif)

$~$

$~$

### **Responsive features**
---
**Navigation Bar**
On Tablets and Desktop the Navigation Bar change its possition for a landscape configuration.

**Adding a New Record**
On mobile phones with shorter screens the *erase/reset entered data button* gets hidden.

**Record Description**
On mobile phones with narrow screens, larger *record descriptions* get truncated with ...

$~$

$~$

### **Notes for Local deployment**
---
In case you want to use this repo locally, here are some caveats that hopefully will smooth the process 😅

**Proxy:** Search on the package.json file for the Frontend code and change it to localhost:5000 (or the port you are using for Node.js locally)

**DataBase:** Search on the Backend code for index.js inside *the DB folder*. There you can uncomment/comment blocks of code for connecting locally to a database.
This proyect uses Postgres but you can quickly adapt it to another relational db of your choice.

For a remote connection to the hosted database a URI approach is used. You can replace with your own in the *config.env* file inside the *config* folder or where you manage the enviroment variables.

$~$

$~$

### Database Schema
---
Checkout the file *database.sql* inside the *db folder* on the backend code to have an idea / get SQL commands that may help you re-create the database locally.

If you are a visual learner, the graph below could be of better help:
![database schema](/readme/budbuddb_schema.png)
Follow [this link](https://dbdiagram.io/d/62647d961072ae0b6ad84136) 🐇 to get to interact with the diagram.

$~$

$~$

#### **Nice to have features:**
There is so much to learn and implement that I decided to keep a checklist althought looking at it is overwhelming 😬

- [ ] A more semantic HTML
- [ ] Subtle animations and cool microinteractions
- [ ] More types of graphs to better analize the data
- [ ] ORM Model DB, types and validation (could it be Sequelize?)
- [ ] Multiple users, Login Auth (JWT?)
- [ ] Add and manage new categories
- [ ] More records filtering options (date, categories)
- [ ] PWA - serviceworker
- [ ] Unit testing


