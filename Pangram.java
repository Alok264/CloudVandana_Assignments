package pangramcheck;

import java.util.Scanner;
import java.lang.Exception;

/**
 * This class checks if a string is a Pangram or not. A Pangram is a string that contains all the letters of the English alphabet at least once.
 * For example, "The quick brown fox jumps over the lazy dog" is a Pangram.
 * "The quick brown fox jumps over the dog" is not a Pangram.
 * @author : Alok Kumar
 * @since : 25/09/2023
 * @version 1.0.0
 */
public class Pangram {

    /**
     * This is the main method which makes use of isPangram method.
     * @param args Unused.
     * @throws Exception If there's an error in checking.
     */
    public static void main(String[] args) throws Exception
    {
        Scanner s = new Scanner(System.in);
        String str = s.nextLine();
        boolean ans = Pangram.isPangram(str);
        if(ans)
        {
            System.out.println("The string: "+ str +" (is a Pangram).");
        }
        else
        {
            System.out.println("The string: "+ str +" (is not a Pangram).");
        }
        s.close();
    }
    /**
     * This method checks if a string is a Pangram or not.
     * @param str The string to be checked.
     * @return True if the string is a Pangram, false otherwise.
     * @throws Exception If there's an error in checking.
     */
    public static boolean isPangram(String str) throws Exception
    {
        boolean[] mark = new boolean[26];
        int index = 0;
        for(int i=0;i<str.length();i++)
        {
            if('A'<=str.charAt(i) && str.charAt(i)<='Z')
            {
                index = str.charAt(i)-'A';
            }
            else if('a'<=str.charAt(i) && str.charAt(i)<='z')
            {
                index = str.charAt(i)-'a';
            }
            else continue;
            mark[index] = true;
        }
        for(int i=0;i<26;i++)
        {
            if(mark[i]==false) return false;
        }
        return true;
    }
}
