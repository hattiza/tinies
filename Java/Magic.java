public class Magic {
  public static void main(String[] args) {

    int myNumber  = 6; // this is the original value
    int stepOne = myNumber * myNumber;
    int stepTwo = stepOne + myNumber;
    int stepThree = stepTwo / myNumber;
    int stepFour = stepThree + 17;
    int stepFive = stepFour - myNumber;
    int stepSix = stepFive / 6;
    System.out.println(stepSix);

    // non-variable version
    int magicNumber  = 17; // this is the original value
    int original = magicNumber;
    magicNumber *= original;
    magicNumber += original;
    magicNumber /= original;
    magicNumber += 17;
    magicNumber -= original;
    magicNumber /= 6;
    System.out.println(magicNumber);

    // should be the same
    System.out.println(magicNumber == stepSix);

  }
}