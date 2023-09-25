package romantointeger;

import java.util.Scanner;
import java.lang.Exception;

/**
 * This class converts a Roman number to an Integer.
 * @author : Alok Kumar
 * @since : 25/09/2023
 * @version 1.0.0
 */
public class RomanToInteger {

    /**
     * This is the main method which makes use of romanToInt method.
     * @param args Unused.
     * @throws Exception If there's an error in conversion.
     */
    public static void main(String[] args) throws Exception
    {
        Scanner s = new Scanner(System.in);
        String romanNumber = s.next();
        int ans = RomanToInteger.romanToInt(romanNumber);
        System.out.println(ans);
        s.close();
    }

    /**
     * This method converts a Roman number to an Integer.
     * @param s The Roman number to be converted.
     * @return The Integer value of the Roman number.
     * @throws Exception If there's an error in conversion.
     */
    public static int romanToInt(String s) throws Exception
    {
        int ans = 0;
        for(int i = 0; i<s.length(); i++)
        {
            if(s.charAt(i)=='I')
            {
                // The rule is that if I comes before V or X, then it is 4 or 9 respectively. And I is only subtracted from V or X.
                if(i+1<s.length() && s.charAt(i+1)=='V') {ans = ans + 4; i++;}
                else if(i+1<s.length() && s.charAt(i+1)=='X') {ans = ans + 9; i++;}
                else ans = ans + 1;
            }
            // The rule is that V is never subtracted from any other number.
            else if(s.charAt(i)=='V') ans = ans + 5;
            // The rule is that L is never subtracted from any other number.
            else if(s.charAt(i)=='L') ans = ans + 50;
            // The rule is that D is never subtracted from any other number.
            else if(s.charAt(i)=='D') ans = ans + 500;
            // The rule is that M is never subtracted from any other number.
            else if(s.charAt(i)=='M') ans = ans + 1000;
            else if(s.charAt(i)=='X')
            {
                // The rule is that if X comes before L or C, then it is 40 or 90 respectively. And X is only subtracted from L or C.
                if(i+1<s.length() && s.charAt(i+1)=='L') {ans = ans + 40; i++;}
                else if(i+1<s.length() && s.charAt(i+1)=='C') {ans = ans + 90; i++;}
                else ans = ans + 10;
            }
            else if(s.charAt(i)=='C')
            {
                // The rule is that if C comes before D or M, then it is 400 or 900 respectively. And C is only subtracted from D or M.
                if(i+1<s.length() && s.charAt(i+1)=='D') {ans = ans + 400; i++;}
                else if(i+1<s.length() && s.charAt(i+1)=='M') {ans = ans + 900; i++;}
                else ans = ans + 100;
            }
        }
        return ans;
    }
}
