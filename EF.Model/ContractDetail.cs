using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF.Model
{
    public class ContractDetail
    {
        public int Id { get; set; }

        public string Content { get; set; }

        public int ContractId { get; set; }

        public virtual Contract Contract { get; set; }
    }
}
