using Nunit.Framework;

namespace api.Services
{
  int _sqr = new RandomSquareCalculator()

[Test Fixture]
public int randowmSquareTCs 
{

[Testcase(0,0)]
[Testcase(1,1)]
[Testcase(5,25)]
[Testcase(11,"error")]


public void randowmSquareFn(int n, int expectedValue)
{Assert.equal(expectedResult,_sqr.Calculate(n))
}


}
}