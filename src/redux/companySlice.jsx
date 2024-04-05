import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
  name: "companies",
 
  initialState: {
    companies: [],
    
  },
  reducers: {
    getCompanies: (state, action) => {
      if (Array.isArray(action.payload.data)) {
        state.companies = action.payload.data.map(company => ({
          id: company._id,
          companyname: company.companyname,
          jobprofile: company.jobprofile,
          ctc: company.ctc,
          doi: company.doi,
          eligibilityCriteria: company.eligibilityCriteria,
          jobdescription:company.jobdescription,
          tenthPercentage: company.tenthPercentage,
          twelfthPercentage: company.twelfthPercentage,
          graduationCGPA: company.graduationCGPA,
          sixthSemesterCGPA: company.sixthSemesterCGPA
        }));
      } else if (typeof action.payload.data === 'object') {
        // Assuming you only have one company object instead of an array
        const company = action.payload.data;
        state.companies = [{
          id: company._id,
          companyname: company.companyname,
          jobprofile: company.jobprofile,
          ctc: company.ctc,
          doi: company.doi,
          jobdescription: company.jobdescription,
          eligibilityCriteria: company.eligibilityCriteria,
          tenthPercentage: company.tenthPercentage,
          twelfthPercentage: company.twelfthPercentage,
          graduationCGPA: company.graduationCGPA,
          sixthSemesterCGPA: company.sixthSemesterCGPA
        }];
      } else {
        console.error("Payload data is not an array or object:", action.payload.data);
      }
    },
    

    updateCompany:(state,action)=>{
        const index=state.companies.findIndex(x=>x.id===action.payload.id)
        state.companies[index]={
            id:action.payload.id,
            companyname:action.payload.companyname,
            jobprofile: action.payload.jobprofile,
            ctc: action.payload.ctc,
            doi: action.payload.doi,
            tenthPercentage: action.payload.tenthPercentage,
            twelfthPercentage: action.payload.twelfthPercentage,
            graduationCGPA: action.payload.graduationCGPA,
            sixthSemesterCGPA: action.payload.sixthSemesterCGPA,
        }


    },

    deleteCompany:(state,action)=>{
      const id=action.payload.id
      state.companies=state.companies.filter(u=>u.id!==id)
    },

    
  }
});

export const { getCompanies, updateCompany, deleteCompany} = companySlice.actions;
export default companySlice.reducer;
