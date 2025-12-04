How-To Guide for Admins
=======================

.. toctree::
   :caption: How-To Guide for Admins


Configuring the Application
===========================

To configure the application, edit the ``backend/config.toml`` file.

Available options:

- ``DEBUG``  
  Enables or disables debug mode. Accepts ``true`` or ``false``.

- ``CARROUSSEL_SIZE``  
  Determines how many pictures are stored for the carousel. Must be an integer greater than 0.

- ``RESULTS_PER_IMAGE``  
  Determines how many x-rays the AI generates for each request. Must be an integer greater than 0.

- ``ANIMAL_TYPES[]``  
  A list of animal types that can be selected by users during uploads.  
  This helps the AI model identify the type of patient.  
  Example:

  .. code-block:: toml

     ANIMAL_TYPES = ["bear", "dog", "cat", "bunny", "other"]

Configuring Storage
-------------------

The recommended way to configure Seafile storage is by using a **repository token**.  
This ensures that even if the token is leaked, it cannot grant access to your entire Seafile account.

To generate a **repository token**, follow these steps in the Seafile GUI:

1. Open your Seafile library.
2. Click the **three dots** (library context menu).
3. Navigate to **Advanced → API Token**.

.. note::
   Teddy Hospital supports repository tokens only if your Seafile API version is **12 or higher**.

If your Seafile installation uses an older API version (< 12), you must use an **account token** instead.  
You can obtain one by running the following command:

.. code-block:: bash

   curl --request POST \
        --url <seafile_url>/api2/auth-token/ \
        [--header 'X-SEAFILE-OTP: <otp>'] \
        --header 'accept: application/json' \
        --header 'content-type: application/json' \
        --data '
   {
     "username": "<username>",
     "password": "<password>"
   }
   '

Where:

- ``<seafile_url>`` is your Seafile server URL.
- ``X-SEAFILE-OTP`` is the 6-digit one-time password (OTP) used for two-factor authentication, if enabled.

You can also obtain the account token directly through the Seafile GUI.

.. warning::
   Keep your authentication tokens secret. Do not share or commit them to version control.

If you prefer not to generate tokens, you can alternatively provide your **username** and **password** directly in ``config.toml``.  
Only **one** authentication method is required — you may safely remove any unused credentials from the configuration file.

Adding Other Storage Solutions
------------------------------

Currently, **Seafile** is the only officially supported storage backend.  
However, the application is designed to make it relatively easy to integrate other storage providers.

To add a new storage solution:

1. Create a new class that inherits from the `Storage` abstract base class located in `backend/storage/storage.py`.
2. Implement all abstract methods defined in the `Storage` class. (Refer to the existing `SeafileStorage` class in `backend/storage/seafile_storage.py` for guidance.)
3. Configuration options for your new storage class can be added to `backend/config.toml`. They will be automatically passed to your class constructor.
3. Now you can use the new storage class by creating a section in `config.toml` with the name of your class. For example, if your class is named `MyStorage`, add the following section:

   .. code-block:: toml

      [[MyStorage]]
      OPTION_1 = "value1"
      OPTION_2 = "value2"

    Replace `OPTION_1` and `OPTION_2` with the actual configuration options required by your storage class.


    