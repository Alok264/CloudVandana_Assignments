package shufflearray;

import java.util.List;
import java.util.ArrayList;
import java.lang.Math;
import java.util.Collections;
import java.util.Arrays;
import java.lang.Exception;

/**
 * @author: Alok Kumar
 * @since : 25/09/2023
 * @version 1.0.0
 * @see: Program will shuffle the array elements. The Array given is
 *       {1,2,3,4,5,6,7}.
 */
public class ShuffleArray {
    /**
     * This method shuffles the elements of an integer array.
     *
     * @param nums The input integer array to be shuffled.
     * @param n    The length of the array.
     * @return The shuffled integer array.
     * @throws Exception If there's an error in shuffling.
     * @see: This method uses the Collections.shuffle() method to shuffle the array.
     */
    public static int[] shuffle1(int[] nums, int n) throws Exception {
        ArrayList<Integer> l = new ArrayList<>();
        for (int i : nums) {
            l.add(i);
        }
        Collections.shuffle(l);
        nums = l.stream().mapToInt(i -> i).toArray();
        l.clear();
        return nums;
    }

    public static void main(String[] args) throws Exception {
        int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        // n is the length of the array.
        int n = nums.length;
        // Call the shuffle method. Can also use ShuffleArray.shuffle1(nums, n);
        int[] ans = ShuffleArray.shuffle(nums, n);
        for (int i = 0; i < ans.length; i++) {
            System.out.print(ans[i] + " ");
        }
    }

    /**
     * This method shuffles the elements of an integer array.
     *
     * @param nums The input integer array to be shuffled.
     * @param n    The length of the array.
     * @return The shuffled integer array.
     * @throws Exception If there's an error in shuffling.
     * @see: This method uses the Math.random() method to shuffle the array.
     */
    public static int[] shuffle(int[] nums, int n) throws Exception {
        int a[] = new int[n];
        List<Integer> l = new ArrayList<>();
        // Iterate till the length of the array.
        int i = 0;
        while (i < n) {
            // Generate a random number between 0 and n-1.
            int random = (int) (Math.random() * n);
            if (!l.contains(random)) {
                l.add(random);
                a[i] = nums[random];
                i++;
            }
        }
        l.clear();
        return a;
    }
}
