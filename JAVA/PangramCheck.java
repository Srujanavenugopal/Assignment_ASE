import java.util.Scanner;

public class PangramCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase();
        scanner.close();

        if (isPangram(sentence)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        int letterCount = 0;

        for (char letter = 'a'; letter <= 'z'; letter++) {
            if (sentence.indexOf(letter) >= 0) {
                letterCount++;
            }
        }

        return letterCount == 26;
    }
}