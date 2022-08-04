import java.util.Scanner;
 
public class Domino {
 
	public static void main(String[] args) {
		DominoAmount();
 
	}
	
	public static void DominoAmount() {
		Scanner scan = new Scanner(System.in);
		int m = scan.nextInt();
		int n = scan.nextInt();
		int output = m*n/2;
		System.out.println(output);
		
	}
