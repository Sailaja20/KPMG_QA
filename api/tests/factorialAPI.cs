using Nunit.Framework;

namespace api.Services
{
  int _fact = new FactorialCalculator()

[Test Fixture]
public int FactorialTCs 
{

[Testcase(0,1)]
[Testcase(1,1)]
[Testcase(5,120)]
[Testcase(11,"error")]


public void FactorialFn(int n, int expectedValue)
{Assert.equal(expectedResult,_fact.calculator(n))
}


}
}