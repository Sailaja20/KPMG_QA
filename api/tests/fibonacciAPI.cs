using Nunit.Framework;

namespace api.Services
{
  int _fib = new FibonacciCalculator()

[Test Fixture]
public int FibonacciTCs 
{

[Testcase(0,0)]
[Testcase(1,1)]
[Testcase(2,0 1 2)]
[Testcase(11,"error")]


public void FibonacciFn(int n, int expectedValue)
{
    Assert.equal(expectedResult,_fib.Calculate(n))
}


}
}