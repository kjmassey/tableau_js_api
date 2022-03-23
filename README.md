###### *COMING SOON: My very first blog post, where I will cover this project - with additional code annotations and examples!*

# Tableau Viz Portal using the JavaScript API
##### *IMPORTANT: This code is for demonstration purposes only and is not suitable for a production environment. See NOTES at the bottom of this readme*

This is the scaffolding of a hypothetical BI visualization portal using the Tableau JavaScript API!

The intention of this repo is to augment/complement the #TableauCoders initiative (#TCI) user group. We realize that some our audience aren't quite pros, but aren't newbies either - and they're looking for real-world examples, right now!

This is the first in a series of side-projects I hope to share with all of you, and I would love for this to become a community project/open forum/jam session on coding questions, concerns, feedback and gripes about Tableau for those of us *already* in the thick of it! Please feel free to enagage both me and Zak here on github, on Twitter, or via email!

![image](https://user-images.githubusercontent.com/67481849/159615201-f5a04ab8-59df-4266-8eff-4e75339415ab.png)


As of **3/22/22**, this mock portal includes:
- Embedded viz(zes)
- Switch between vizzes in same part of DOM
- Interacting with parameters/filters by name, w/ logic based on current value(s)
  - onClick
  - onChange (form > select)

Open functionality opportunities:
- Reset all (all, filters, params, etc.)
- Populate/use data from sheet/mark on page
- Transform data based on user input
- **Your ideas!**

Please enagage with both me (@UpInYourVizness) and Zak (@ZaksViz) here and on Twitter with any questions you may have! We're also available on the #DataDev and #TableauCoders channels on Slack!

Tableau JavaScript API Reference: [Click here](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm)

-------------

#### NOTES:
- ### You won't have access to the dashboards/workbooks linked in the code! ###
  - **I am unable to to grant additional access at this time**
  - You'll need to update the urls, menus, etc. if you intend to use any of this code for your project
- **Don't open the .html files directly - they must be served over http to function properly!**
  - VS Code Extension: *Live Server* - allows right-click > serve locally
- Expect CSS/DOM mistakes:
  - You'll notice bootstrap framework is imported, but it's being used mostly for jQuery and some form handling shortcuts
  - In general, I avoided using any framework specific elements, components, css, etc. to avoid clutter or ambiguity
  - I know my way around a flexbox and its nth child, but I am not a designer - the focus here is on utility, but any and all feedback is always welcome regarding UX/UI!
  
- jQuery is used heavily!
  - If you're unfamiliar:
    - Officially: "jQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation..."
    - In practice, it can be seen as a shorthand for many of the most common ways people use JS to read/write/update DOM objects
  - What to know?
    - jQuery requires knowledge of CSS!
    - jQuery and vanilla JS syntax are often both seen within the same functions
    - jQuery can be used with popular frameworks, e.g. React, Vue.js, Angular, but may conflict or overwrite their functionality - YMMV
    - In and of itself, jQuery is not reactive, i.e.:
      - "When told - find, then do" vs "always listen, then respond"
      - vanilla JS listener events can still be used
      
- Vanilla JS/ES6 translation to come!
  - Everything shown here is 100% possible without jQuery - it will just be more verbose in most cases.
  - Check out jQuery either way!
