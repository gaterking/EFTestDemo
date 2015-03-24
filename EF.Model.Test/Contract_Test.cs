using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using EntityFramework.Testing;
using Moq;
using System.Data.Entity;

namespace EF.Model.Test
{
    [TestFixture]
    public class Contract_Test
    {
        [Test]
        public void Test()
        {
            var cotractData = new List<Contract>
            {
                new Contract{ Id=1, ContractNO = "HT-201501", ContractDetails=new List<ContractDetail>{
                    new ContractDetail(){ Id=1, Content="AAA_Content_0"},
                    new ContractDetail(){ Id=2, Content="AAA_Content_1"}
                }}
            };
            var mockSet = new Mock<DbSet<Contract>>()
                .SetupData(cotractData);
            
            var mockCtx = new Mock<EFModelContext>();
            mockCtx.Setup(c => c.Contracts).Returns(mockSet.Object);

            using (var ctx = mockCtx.Object)
            {
                Assert.AreEqual(1, ctx.Contracts.Count());
                var c_1 = ctx.Contracts.First(c => c.Id == 1);
                Assert.AreEqual(1, c_1.Id);
                Assert.AreEqual(2, c_1.ContractDetails.Count());
                Assert.AreEqual(1, c_1.ContractDetails[0].Id);
                Assert.AreEqual(2, c_1.ContractDetails[1].Id);

                //c_1.ContractDetails[0].Content = "AAA_Content_0" + "_Test";
                ctx.SaveChanges();
                mockCtx.Verify(m => m.SaveChanges(), Times.Once()); 
            }
        }
    }
}
