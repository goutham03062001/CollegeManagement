import React from 'react'

const SocialAccount = (({accountName})=>{
   return(<>
     <div className='col-lg-4'>
                <div className='card'>
                    <div className='card-body'>
                        <p className='text text-center'>{accountName}</p>
                        <p className='text text-center'>No.Of Followers : 100</p>
                    </div>
                </div>
            </div>
   </>)
})
const SocialAccounts = () => {
  return (
    <div className='container'>
        <div className='row'>
            <SocialAccount accountName="Instagram"/>
            <SocialAccount accountName="Facebook"/>
            <SocialAccount accountName="Youtube"/>
        </div>
    </div>
  )
}

export default SocialAccounts