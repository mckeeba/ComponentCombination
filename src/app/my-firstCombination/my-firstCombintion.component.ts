import {Component} from '@angular/core';

@Component({
    selector:'app-my-firstCombination', 
    templateUrl: './my-firstCombination.component.html',
    styleUrls: ['./my-firstCombination.component.css']})

    export class comboComponent 
    {
     //**Other problem: how to check each button for a specific character being displayed to then output some text */ 
      
     public comboCode = [0,2,1,7,8];
     public currentCode = [0,0,0,0,0];
     // The Correct input ['1','7','2','0','8']; 
     
     //positions that are associated with the values in combo code, that will display if placed in proper order
     public correctComboCode = [2, 3, 1, 0, 4];
     public isPatternCorrect = false;



       //We are rotating through the characters in our array, associating the character with our current position through the cycle
            rotate(x:number):void
            {
                this.currentCode[x]=(this.currentCode[x]+1) % this.comboCode.length;
                this.comboCorrect();
            }

            //boolean method

            comboCorrect():boolean
            {
                const current = this.currentCode;
                
              for(let i = 0; i < this.correctComboCode.length; i++)
              {
                if(current[i] !== this.correctComboCode[i])
                {
                    
                    return this.isPatternCorrect = false;
                }

              }
              return this.isPatternCorrect = true;
            }
          
           
        


       
    }