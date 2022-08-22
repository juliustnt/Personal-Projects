/*
 * @juliustnt
 * 8/22/22
 * Program that replaces letters with symbols
 */
import java.util.Random;
import java.util.Scanner;

public class passwordGenerator {

    static String PasswordGen(String fullPass, Boolean specChar, Boolean numbers) {
        Random rand = new Random();
        StringBuilder string = new StringBuilder(fullPass);

        if (specChar) { 
            for (int i = 0; i < fullPass.length(); i++){
                int randomNum = rand.nextInt(1, 3);
                
                if (string.charAt(i) == 'a' && randomNum == 1) {
                    string.setCharAt(i, '@');
                }
                else if (string.charAt(i) == 'a' && randomNum == 2) {
                    string.setCharAt(i, '&');
                }   
            }
            fullPass = string.toString();
            
            fullPass = fullPass.replace("s", "$");
            fullPass = fullPass.replace("i", "!");
        }
        
        if (numbers) {
            fullPass = fullPass.replace("a","4");
            fullPass = fullPass.replace("s","5");
            fullPass = fullPass.replace("o", "0");
            fullPass = fullPass.replace("t", "7");
        }
        return fullPass;
    }
    public static void main(String args[]) {
        Boolean specialChar = false, numbers = false;

        Scanner in = new Scanner(System.in);

        System.out.print("Your password: ");
        String password = in.nextLine();

        System.out.print("If you would like to have special characters (@, $, etc.), reply with 'yes': ");
        String charChoice = in.nextLine();

        charChoice = charChoice.toLowerCase();

        System.out.print("If you would like to have numbers, reply with 'yes': ");
        String numChoice = in.nextLine();

        numChoice = numChoice.toLowerCase();
        
        if (charChoice.equals("yes")) { 
            specialChar = true;
        }

        if (numChoice.equals("yes")) {
            numbers = true;
        }
        
        password = PasswordGen(password, specialChar, numbers);
        System.out.println(password);
        
        in.close();        
    }
}