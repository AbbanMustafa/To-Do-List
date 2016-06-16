import { Template } from 'meteor/templating';
import './body.html';


Template.body.helpers({

  tasks: [

    { text: "Learn to Program"},
    { text: "Become good at it"},
    { text: "Maybe get paid to do it"},
  ],
});
