package com.example.reactspringproject.repository;

import com.example.reactspringproject.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
