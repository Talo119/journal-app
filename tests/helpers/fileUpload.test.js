import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name:'dfyb95bn5',
    api_key: '972637369135865',
    api_secret:'CzDO2Jq4JrosQpc5hBrLDxvN-Ko',
    secure:true
})

describe('Tests in fileUpload', () => { 
    



    test('should upload a file succesfuly to cloudinary', async() => { 
        
        const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFzBqaR5pTy2dfWO5o-HWpRRw912tycnXlA&usqp=CAU';
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();

        const file = new File([blob], 'test.jpg');
        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');
        const segments = url.split('/');
        const imageId = segments[ segments.length -1 ].replace('.jpg', '');
        const cloudResp = await cloudinary.api.delete_resources([ `journal/${imageId}` ],{
            resource_type: 'image'
        });
        console.log(cloudResp);
        

     });


     test('should return null', async() => { 
        const file = new File([], 'test.jpg');
        const url = await fileUpload( file );

        expect( url ).toBe( null );
      })

 })